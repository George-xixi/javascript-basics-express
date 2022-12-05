const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return [property] in object;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const findAge = person => {
    return person.age;
  };
  return people.map(findAge);
};

const findByName = (name, people) => {
  const findName = person => {
    return person.name === name;
  };
  return people.find(findName);
};

const findHondas = cars => {
  const findCar = car => {
    return car.manufacturer === 'Honda';
  };
  return cars.filter(findCar);
};

const averageAge = people => {
  const sumAge = people
    .map(person => person.age)
    .reduce((prev, current) => prev + current, 0);
  return sumAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function (otherPerson) {
      return 'Hi ' + 
      otherPerson +
      ', my name is ' +
      this.name +
      ' and I am ' +
      this.age +
      '!';
    }
  };
};
module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
