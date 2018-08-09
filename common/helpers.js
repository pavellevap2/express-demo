const R = require("ramda");
const uniqid = require("uniqid");

const findByCredentials = (email, password, users) =>
  R.find(
    user => user.email == email && user.password == password,
    R.values(users)
  );

const updateDataBase = (user, db) => {
  const userId = uniqid();
  return R.assoc(userId, { id: userId, ...user }, db.users);
};

exports.findByCredentials = findByCredentials;
exports.updateDataBase = updateDataBase;
