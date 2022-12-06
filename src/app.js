const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

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
module.exports = app;
