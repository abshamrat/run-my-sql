
module.exports = async (db) => {
  const rawTables = await db.query(`
    SELECT table_name as tableName 
    FROM information_schema.tables 
    where TABLE_SCHEMA='${process.env.MYSQL_DATABASE}'`);
  const tableNames = rawTables[0].map((t) => t.tableName);
  return tableNames;

}