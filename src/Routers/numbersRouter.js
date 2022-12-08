const express = require('express');
const {
  addFunc,
  subtractFunc,
  multiplyFunc,
  divideFunc,
  remainderFunc,
} = require('../controllers/numbersController');

const numbersRouter = express.Router();

numbersRouter.get('/add/:num1/and/:num2', addFunc);

numbersRouter.get('/subtract/:n1/from/:n2', subtractFunc);

numbersRouter.post('/multiply', multiplyFunc);

numbersRouter.post('/divide', divideFunc);

numbersRouter.post('/remainder', remainderFunc);

module.exports = numbersRouter;
