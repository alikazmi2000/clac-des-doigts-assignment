const { to24DigitObjectId, leadingObjectId } = require('../../helpers/mock');
const ObjectID = require('mongodb').ObjectID;
const items = [
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.farm, 0)),
    name:"Farm One",
   
  },
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.farm, 1)),
    name:"Farm Two",
   
  },
  {
    _id: new ObjectID(to24DigitObjectId(leadingObjectId.farm, 2)),
    name:"Farm Three",
   
  },
  

];

module.exports = items;
