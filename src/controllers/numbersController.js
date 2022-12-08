const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addFunc = (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);

  if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    res.status(200).json({ result: add(num1, num2) });
  }
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
};

const subtractFunc = (req, res) => {
  const n1 = parseInt(req.params.n1, 10);
  const n2 = parseInt(req.params.n2, 10);

  if (!Number.isNaN(n1) && !Number.isNaN(n2)) {
    res.status(200).json({ result: subtract(n2, n1) });
  }
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
};

const multiplyFunc = (req, res) => {
  const { a, b } = req.body;

  const n1 = parseInt(a, 10);
  const n2 = parseInt(b, 10);
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(n1) && Number.isNaN(n2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(n1, n2) });
};

const divideFunc = (req, res) => {
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
};

const remainderFunc = (req, res) => {
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
};

module.exports = { addFunc, subtractFunc, multiplyFunc, divideFunc, remainderFunc };
