const express = require('express');

const stringsRouter = require('./controllers/stringsRouter');
const numbersRouter = require('./controllers/numbersRouter');
const booleansRouter = require('./controllers/booleansRouter');
const arraysRouter = require('./controllers/arraysRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);

module.exports = app;
