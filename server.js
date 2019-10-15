require('dotenv').config;
const express = require('express');
const ejslayouts = require('express-ejs-layouts');
const db = require('./models');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(ejslayouts);

app.use('/authors', require('./routes/authors'));
app.use('/posts', require('./routes/posts'));


app.listen(3000);