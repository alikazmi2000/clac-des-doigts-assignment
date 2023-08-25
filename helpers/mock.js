exports.to24DigitObjectId = (leading, num) => {
  const objectId = `000000000000000000000${num}`.slice(-22);
  return `${leading}${objectId}`;
};

exports.leadingObjectId = {
  farm: '01',
  chicken: '02',
};

exports.deleteTestRecords = (model, arr) => {
  arr.forEach(id => {
    model.findByIdAndRemove(id, err => {
      if (err) {
        console.log(err);
      }
    });
  });
};