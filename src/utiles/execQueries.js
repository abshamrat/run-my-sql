const log = require('./log');

module.exports = async (db, queries) => {
  if (!queries.length) {
    throw new Error(`No queries to execute`);
  }
  log(`Query Length: ${queries.length}`);
  await db.query('SET foreign_key_checks = 0');
  return Promise.all(
    queries.map((query, i) => new Promise((resolve, reject) => {
      db.query({sql: query, timeout: 30000})
        .then((done) => {
          log(`Executed Query: ${i+1}`, 'progress');
          resolve({status: 'done'})})
        .catch((err) => reject({status: 'failed', err}))
    }))
  )
}