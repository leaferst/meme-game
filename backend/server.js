const express = require('express');
const cors = require('cors');
const userRouter = require('.');
const { testConnection } = require('./config/connection');
const seedDatabase = require('./config/seedDirectory');

const port = 8000;
const app = express();

app.use(express);

testConnection();
// seedDatabase();

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});