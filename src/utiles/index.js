const execQueries = require('./execQueries');
const getTables = require('./getTables');
const readSqlFile = require('./readSqlFile');
const log = require('./log');

module.exports = {
  execQueries,
  getTables,
  readSqlFile,
  log
}