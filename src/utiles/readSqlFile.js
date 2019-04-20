const {existsSync, readFileSync} = require('fs');

module.exports = async (filePath) => {
  if (!existsSync(filePath)) {
    throw new Error('No file is attached');
  }
  return readFileSync(filePath, 'utf8', 'r')
  .split(/;\n/g)
  .map(line => line.replace(/^\s+/, '').replace(/\s+$/, ''))
  .filter(line => line.length > 0);
}