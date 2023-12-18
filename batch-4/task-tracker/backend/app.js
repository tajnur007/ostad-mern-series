const express = require('express');
// const router = require('./src/routes/api');
const app = new express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const path = require("path");
// const mongoose = require('mongoose');
// const mongoSanitize = require('express-mongo-sanitize');


// Using rate limit middleware
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Using helmet for secure http response
app.use(helmet());

// Using xss-clean for sanitize request body, query and params
app.use(xss());

// Using hpp for avoiding data (query, params, req.body) population
app.use(hpp());

// Using cors for enabling CORS 
app.use(cors());



// let URL = "mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/ecom4?retryWrites=true&w=majority";
// let option = { user: 'testuser7777', pass: "testuser7777", autoIndex: true };
// mongoose.connect(URL, option).then((res) => {
//   console.log("Database Connected")
// }).catch((err) => {
//   console.log(err)
// })

// app.use(cookieParser());
// app.use(cors())
// app.use(helmet())
// app.use(mongoSanitize())
// app.use(xss())
// app.use(hpp())

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb' }));


// const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
// app.use(limiter)


// app.use("/api/v1", router)
app.get('/products', function (req, res) {
  res.json({ msg: 'This is CORS-disabled for all origins!' })
});


module.exports = app;