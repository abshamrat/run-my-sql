const qb = require('./queryBuilders/index');
const utiles = require('./utiles/index');
const DB = require('./db/dbConnection');

/**
 * Usage: runMySQL({type: 'fresh', options: {seedFile: `${__dirname}/../data/dummy-database.sql`}});
 * @param {Object} params 
 */
async function runMySQL (params) {
  const { type, options} = params;

  utiles.log(`Running Sql Queries...`);
  const start = new Date()
  if (!qb[type]) {
    throw new Error('Type is not valid')
  }
  const db = await DB.connect();
  const queries = await qb[params.type]({db, ...options});
  await utiles.execQueries(db, queries).then(() => DB.disconnect()).catch((error) => {
    DB.disconnect()
    utiles.log(error, 'error');
  });
  const end = new Date() - start
  utiles.log(`\nExecution time: ${end/1000} seconds`);
  return { execTime: end, isDone: true };
}

module.exports = runMySQL;