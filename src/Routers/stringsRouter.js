const express = require('express');

const {
  helloFunc,
  upperFunc,
  lowerFunc,
  firstCharactersFunc,
} = require('../controllers/stringsController');

const stringsRouter = express.Router();

stringsRouter.get('/hello/:string', helloFunc);

stringsRouter.get('/upper/:string', upperFunc);

stringsRouter.get('/lower/:string', lowerFunc);

stringsRouter.get('/first-characters/:string', firstCharactersFunc);

module.exports = stringsRouter;
