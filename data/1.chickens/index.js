const faker = require('faker');
const { to24DigitObjectId, leadingObjectId } = require('../../helpers/mock');
const ObjectID = require('mongodb').ObjectID;
const items = [
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.chicken, 0)),
    name:"Chicken One",
    weight:Math.random()%100,
    birthday:faker.date.past(),
    steps:Math.random()%100,
    isRunning:true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.chicken, 1)),
    name:"Chicken Two",
    weight:Math.random()%100,
    birthday:faker.date.past(),
    steps:Math.random()%100,
    isRunning:true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.chicken, 2)),
    name:"Chicken Three",
    weight:Math.random()%100,
    birthday:faker.date.past(),
    steps:Math.random()%100,
    isRunning:true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }

];

module.exports = items;
