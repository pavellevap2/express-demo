const R = require("ramda");
const uniqid = require("uniqid");

const findByCredentials = (email, password, users) =>
  R.find(
    user => user.email == email && user.password == password,
    R.values(users)
  );

const findByEmail = (email, users) => R.find(R.propEq("email", email))(users);

const updateDataBase = (user, db) =>
  R.append({ id: uniqid(), ...user }, db.users);

exports.findByCredentials = findByCredentials;
exports.updateDataBase = updateDataBase;
exports.findByEmail = findByEmail;
