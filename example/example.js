const {runMySql} = require('../index');

runMySql({
    type: 'fresh',
    options: {
        seedFile: `${__dirname}/../data/dump.sql`
    }
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});