const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
const morgan = require('morgan');


const mongoString = process.env.DATABASE_URL

const app = express();

var cors = require('cors');


// app.use(cors({origin:"http://localhost:8081"}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
