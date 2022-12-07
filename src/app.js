const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add } = require('./lib/numbers');

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

  if (!isNaN(num1) && !isNaN(num2)) {
    res.status(200).json({ result: add(num1, num2) });
  }
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
});
module.exports = app;
