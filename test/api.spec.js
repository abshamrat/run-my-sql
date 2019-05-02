const {runMySql} = require('../index');

describe('Test the available api', () => {
    test('Fresh DB and seed sql', () => {
        const result = runMySql({
            type: 'fresh',
            options: {
                seedFile: `${__dirname}/../data/dummy.sql`
            }
        });
        expect(result.isDone).toEqual(true)
    });
    test('Fresh DB and seed sql', () => {
        const result = runMySql({
            type: 'fresh',
        });
        expect(result.isDone).toEqual(false)
    });
    test('Truncate DB', () => {
        const result = runMySql({
            type: 'truncate'
        });
        expect(result.isDone).toEqual(true)
    });
    test('Execute sql', () => {
        const result = runMySql({
            type: 'execSql',
            options: {
                seedFile: `${__dirname}/../data/dummy.sql`
            }
        });
        expect(result.isDone).toEqual(true)
    });
})