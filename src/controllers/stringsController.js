const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const helloFunc = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: sayHello(string) });
};

const upperFunc = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: uppercase(string) });
};

const lowerFunc = (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: lowercase(string) });
};

const firstCharactersFunc = (req, res) => {
  const { string } = req.params;
  const { length } = req.query;

  if (length) {
    res.status(200).json({ result: firstCharacters(string, length) });
  }
  res.status(200).json({ result: firstCharacter(string) });
};

module.exports = { helloFunc, upperFunc, lowerFunc, firstCharactersFunc };
