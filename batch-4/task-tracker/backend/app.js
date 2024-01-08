const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
require('dotenv').config();
const dbConnection = require('./db');

const userRouter = require('./src/routes/user-routes');



// Initializing express application
const app = new express();

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

// Using cookie parser for managing cookies
app.use(cookieParser());

// Using MongoDB sanitize for sanitizing user input
app.use(mongoSanitize());

// Using Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
dbConnection().catch(
  err => console.log('Error occured::', err)
);


app.use(userRouter);



module.exports = app;