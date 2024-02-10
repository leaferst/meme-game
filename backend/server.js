const express = require('express');
const cors = require('cors');
const userRouter = require('.');
const { testConnection } = require('./config/connection');
const seedDatabase = require('./config/seedDirectory');
const captionRouter = require('./routes/captionRouter');

const port = 8000;
const app = express();

app.use(express.json());
app.use(cors());

testConnection();
// seedDatabase();

// app.use('/images', express.static('path'.join(__dirname, 'images')));

app.use('/captions', captionRouter);



app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});