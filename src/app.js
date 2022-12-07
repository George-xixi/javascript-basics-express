const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract } = require('./lib/numbers');

const app = express();

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
module.exports = app;
