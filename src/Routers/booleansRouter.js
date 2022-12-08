const express = require('express');
const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const booleansRouter = express.Router();

booleansRouter.post('/negate', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: negate(value) });
});

booleansRouter.post('/truthiness', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: truthiness(value) });
});

booleansRouter.get('/is-odd/:n', (req, res) => {
  const n = parseInt(req.params.n, 10);

  if (Number.isNaN(n)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(n) });
});

booleansRouter.get('/:string/starts-with/:char', (req, res) => {
  const { string, char } = req.params;

  if (char.length === 1) {
    res.status(200).json({ result: startsWith(char, string) });
  }
  res.status(400).json({ error: 'Parameter "character" must be a single character.' });
});

module.exports = booleansRouter;
