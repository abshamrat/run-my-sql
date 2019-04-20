const {readSqlFile} = require('../utiles/index');

module.exports = async (options) => {
  const {seedFile} = options;
  const queries = await readSqlFile(seedFile);
  return queries;
}