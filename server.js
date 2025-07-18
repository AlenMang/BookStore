require('dotenv').config();
const pool = require('./db/pgConnection');
const app = require('./app.js');

async function runserver() {
    try {
        pool.connect();
        console.log('Successfully connected to postgres');
    } catch (error) {
        throw error;
    }
}

runserver().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    })
})