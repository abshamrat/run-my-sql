const {getTables, readSqlFile} = require('../utiles/index')

module.exports = async (options) => {
  const {db, seedFile} = options;
  const tables = await getTables(db);
  const query = `DROP TABLE IF EXISTS ${tables.join(',')}`;
  const sqls = await readSqlFile(seedFile);
  const queries = [query, ...sqls];
  return queries;
}