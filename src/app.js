const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: sayHello(string) });
});

app.get('/strings/upper/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: uppercase(string) });
});

app.get('/strings/lower/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: lowercase(string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;

  if (length) {
    res.status(200).json({ result: firstCharacters(string, length) });
  }
  res.status(200).json({ result: firstCharacter(string) });
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);

  if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    res.status(200).json({ result: add(num1, num2) });
  }
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
});

app.get('/numbers/subtract/:n1/from/:n2', (req, res) => {
  const n1 = parseInt(req.params.n1, 10);
  const n2 = parseInt(req.params.n2, 10);

  if (!Number.isNaN(n1) && !Number.isNaN(n2)) {
    res.status(200).json({ result: subtract(n2, n1) });
  }
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;

  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(n1) && Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(n1, n2) });
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;

  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (n1 === 0) {
    res.status(200).json({ result: 0 });
  } else if (n2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(n1) && Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(n1, n2) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;

  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (n1 === 0) {
    res.status(200).json({ result: 0 });
  } else if (n2 === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(n1) && Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(n1, n2) });
});

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
