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
})