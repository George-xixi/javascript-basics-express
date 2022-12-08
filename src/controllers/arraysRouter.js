const express = require('express');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const arraysRouter = express.Router();

arraysRouter.post('/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;

  res.status(200).json({ result: getNthElement(index, array) });
});

arraysRouter.post('/to-string/', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrayToCSVString(array) });
});

arraysRouter.post('/append', (req, res) => {
  const { array, value } = req.body;

  res.status(200).json({ result: addToArray2(value, array) });
});

arraysRouter.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  const newArray = elementsStartingWithAVowel(array);

  res.status(200).json({ result: newArray });
});

arraysRouter.post('/remove-element', (req, res) => {
  const { index } = req.query;
  const { array } = req.body;

  if (index) {
    res.status(200).json({ result: removeNthElement2(index, array) });
  }
  res.status(200).json({ result: removeNthElement2(0, array) });
});

module.exports = arraysRouter;
