const {getTables} = require("../utiles/index")

module.exports = async (options) => {
  const {db} = options;
  const tables = await getTables(db);
  const queries = tables.reduce((acc, table) => ([...acc, `TRUNCATE ${table};`]), []);
  return queries;
}