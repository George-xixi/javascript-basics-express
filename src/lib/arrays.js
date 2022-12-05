const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const numToString = n => {
    return n.toString();
  };
  return numbers.map(numToString);
};

const uppercaseWordsInArray = strings => {
  const uppercase = string => {
    return string.toUpperCase();
  };
  return strings.map(uppercase);
};

const reverseWordsInArray = strings => {
  const reverseWord = string => {
    return string
      .split('')
      .reverse()
      .join('');
  };
  return strings.map(reverseWord);
};

const onlyEven = numbers => {
  function isEven(a) {
    return a % 2 === 0;
  }
  return numbers.filter(isEven);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  function startsVowel(string) {
    const regex = /['a', 'e', 'i', 'o', 'u']/i;
    return string.substring(0, 1).match(regex);
  }
  return strings.filter(startsVowel);
};

const removeSpaces = string => {
  return string.replaceAll(' ', '');
};

const sumNumbers = numbers => {
  function addition(prev, current) {
    return prev + current;
  }
  return numbers.reduce(addition, 0);
};

const sortByLastLetter = strings => {
  const reverseWord = string => {
    return string
      .split('')
      .reverse()
      .join('');
  };
  return strings
    .map(reverseWord)
    .sort()
    .map(reverseWord);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
