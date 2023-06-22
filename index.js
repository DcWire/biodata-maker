const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
// const expressValidator = require('express-validator');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(expressValidator());
app.use(morgan('dev'));

const pdfRouter = require('./routes/pdf');
app.use('/api', pdfRouter);

const PORT = process.env.PORT || 8005;

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

