const express = require('express');

const stringsRouter = require('./Routers/stringsRouter');
const numbersRouter = require('./Routers/numbersRouter');
const booleansRouter = require('./Routers/booleansRouter');
const arraysRouter = require('./Routers/arraysRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);

module.exports = app;
