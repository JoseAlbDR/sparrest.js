const getDB = require('./getDB');
const saveDB = require('./saveDB');
const fs = require('fs');
const config = require('../config/config');

const initDB = () => {
  db = {};

  if (fs.existsSync(config.dbFilePath)) {
    db = getDB(config.dbFilePath);
  }
  const users = db.users || null;
  if (!users) {
    db.users = [];
  }
  saveDB(db);
};

module.exports = initDB;