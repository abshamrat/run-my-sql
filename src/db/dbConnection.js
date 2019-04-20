const mysql = require('mysql2/promise');
require('dotenv').config();


let db;
async function createConnection() {
  if(db) return db;

  db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  return db;
}

module.exports = {
  connect: async function () {
    if (!db) {
      db = await createConnection();
    }
    return db;
  },
  disconnect: function () {
    if (db) {
      db.end((err) => {
        if (err) {
          return process.stdout.write(`Error: ${err.message}`);
        }
        return true;
      });
    }
  }
}

