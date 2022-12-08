const express = require('express');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const stringsRouter = require('./controllers/stringsRouter');
const numbersRouter = require('./controllers/numbersRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:n', (req, res) => {
  const n = parseInt(req.params.n, 10);

  if (Number.isNaN(n)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(n) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string, char } = req.params;

  if (char.length === 1) {
    res.status(200).json({ result: startsWith(char, string) });
  }
  res.status(400).json({ error: 'Parameter "character" must be a single character.' });
});

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
