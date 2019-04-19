/**
* @example
* Usage: runMySQL [options] <file>
*
* Options:
*   -V, --version   output the version number
*   -f, --fresh     Start with a fresh database (drop if exists/create everything)
*   -t, --truncate  Keep database structure but truncate all non-seed tables
*   -s, --sql       Use sql file link to execute
*   -h, --help      output usage information
*
* @example
* npm run refreshDB --fresh
* @name runMySQL
*/
const fs = require('fs');
const program = require('commander');
const DB = require('../src/dbConnection');

let file;


program
  .version('0.0.1')
  .usage('[options] <file>')
  .option(
    '-f, --fresh',
    'Start with a fresh database (drop if exists/create everything)',
  )
  .option(
    '-t, --truncate',
    'Keep database structure but truncate all non-seed tables',
  )
  .option('-s, --sql', 'Use sql file link to execute')
  .action((_file) => {
    file = _file;
  })
  .parse(process.argv);

if (program.sql && program.truncate) {
  process.stderr.write('--truncate option not supported when using --sql option.');
  process.exit(1);
} 
else if (program.sql) {
  if (typeof file === 'undefined' || !file) {
    program.outputHelp();
    process.exit(1);
  }
  
  if (!fs.existsSync(file)) {
    process.stderr.write(`File ${file} does not exist!\n`);
    process.exit(1);
  }
}

if (program.dump && program.truncate) {
  process.stderr.write('--truncate option not supported when using --dump option.');
  process.exit(1);
}

async function execute() {
  return null;
}
