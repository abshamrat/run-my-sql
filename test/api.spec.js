const {runMySql} = require('../index');

describe('Test the available api', () => {
    test('Fresh DB and seed sql', () => {
        const result = runMySql({
            type: 'fresh',
            options: {
                seedFile: `${__dirname}/../data/dummy.sql`
            }
        });
    });
    test('Truncate DB', () => {
        const result = runMySql({
            type: 'truncate'
        });
    });
    test('Execute sql', () => {
        const result = runMySql({
            type: 'execSql',
            options: {
                seedFile: `${__dirname}/../data/dummy.sql`
            }
        });
    });
})