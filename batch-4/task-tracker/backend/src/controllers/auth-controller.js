const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { MailtrapClient } = require('mailtrap');
const UserModel = require('../models/user-models');
const ResetPasswordModel = require('../models/reset-password-models');

const signin = async (req, res) => {
  const filter = {
    email: req.body.email,
    password: req.body.password
  };

  try {
    const resp = await UserModel.findOne(filter);

    const authToken = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour
      data: {
        email: resp.email,
        role: resp.role,
      }
    }, process.env.AUTH_SECRET);

    await UserModel.findOneAndUpdate(filter, {
      authToken: authToken
    });

    res.status(201).send({
      msg: 'Session created!',
      data: authToken,
    });
  } catch (e) {
    res.status(404).send('User not found!');
  }

};

const signout = async (req, res) => {
  const authValue = req.headers.authorization;
  const authToken = authValue?.split(' ')[1];

  try {
    const decodedData = jwt.verify(authToken, process.env.AUTH_SECRET);
    const filter = { email: decodedData.data.email };
    const resp = await UserModel.findOneAndUpdate(filter, {
      authToken: ''
    });

    delete req.headers.authorization;

    res.status(200).send({
      msg: 'Successfully signed out!',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Someting went wrong!');
  }

};

const forgetPassword = async (req, res) => {

  try {
    const RECIPIENT_EMAIL = req.query.email;
    const OTP = Math.floor(Math.random() * 1000000);

    const resp = await UserModel.findOne({ email: RECIPIENT_EMAIL });
    if (!resp) throw Error();

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "7671bd42df007e",
        pass: "93a1bc4c63eeef"
      }
    });

    const info = await transporter.sendMail({
      from: '"Task Tracker 👻" <noreply@task-tracker.com>',
      to: `${RECIPIENT_EMAIL}`,
      subject: "Task Traker OTP",
      html: `<b>OTP: ${OTP}</b>`,
    });

    const jwtToken = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (30), // 30 sec
      data: {
        email: RECIPIENT_EMAIL,
      }
    }, process.env.AUTH_SECRET);

    await ResetPasswordModel.create({
      otpCode: OTP,
      token: jwtToken,
    });

    res.send({
      msg: 'Email sent!',
      data: info,
    });
  } catch (e) {
    res.status(404).send('Email does not exist in our database');
  }
};

const otpValidity = async (req, res) => {
  const filter = {
    otpCode: req.body.otp,
  };

  try {
    const resp = await ResetPasswordModel.findOne(filter);

    const decodedData = jwt.verify(resp.token, process.env.AUTH_SECRET);

    res.send({
      msg: 'OTP valid!',
      data: decodedData.data,
    });
  } catch (e) {
    res.status(404).send('Invalid OTP!');
  }
};

const resetPassword = async (req, res) => {
  const filter = {
    email: req.body.email,
  };

  const update = {
    password: req.body.new_password,
  };

  try {
    const resp = await UserModel.findOneAndUpdate(filter, update);

    res.send({
      msg: 'Password updated!',
      data: resp
    });
  } catch (e) {
    res.status(500).send('Someting went wrong!');
  }

};

module.exports = {
  signin,
  signout,
  forgetPassword,
  otpValidity,
  resetPassword,
};