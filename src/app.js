const express = require('express');

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const stringsRouter = require('./controllers/stringsRouter');
const numbersRouter = require('./controllers/numbersRouter');
const booleansRouter = require('./controllers/booleansRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;

  res.status(200).json({ result: getNthElement(index, array) });
});

app.post('/arrays/to-string/', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array, value } = req.body;

  res.status(200).json({ result: addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  const newArray = elementsStartingWithAVowel(array);

  res.status(200).json({ result: newArray });
});

app.post('/arrays/remove-element', (req, res) => {
  const { index } = req.query;
  const { array } = req.body;

  if (index) {
    res.status(200).json({ result: removeNthElement2(index, array) });
  }
  res.status(200).json({ result: removeNthElement2(0, array) });
});
module.exports = app;
