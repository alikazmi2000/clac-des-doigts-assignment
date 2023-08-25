const faker = require('faker');
const { to24DigitObjectId, leadingObjectId } = require('../../helpers/mock');
const ObjectID = require('mongodb').ObjectID;
const items = [
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.chicken, 0)),
    name:"Chicken One",
    farm:new ObjectID(to24DigitObjectId(leadingObjectId.farm, 0)),
    weight:faker.random.number({ min: 1, max: 100 }),
    birthday:faker.date.past(),
    steps:faker.random.number({ min: 1, max: 100 }),
    isRunning:true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.chicken, 1)),
    name:"Chicken Two",
    farm:new ObjectID(to24DigitObjectId(leadingObjectId.farm, 2)),
    weight:faker.random.number({ min: 1, max: 100 }),
    birthday:faker.date.past(),
    steps:faker.random.number({ min: 1, max: 100 }),
    isRunning:true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.chicken, 2)),
    name:"Chicken Three",
    farm:new ObjectID(to24DigitObjectId(leadingObjectId.farm, 2)),
    weight:faker.random.number({ min: 1, max: 100 }),
    birthday:faker.date.past(),
    steps:faker.random.number({ min: 1, max: 100 }),
    isRunning:true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }

];

module.exports = items;
