const express = require('express');
const morgan = require('morgan');
const router = require(`${__dirname}/routes/mashupRouter`);

const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.use('/api/v1/codeforces', router);

module.exports = app;
