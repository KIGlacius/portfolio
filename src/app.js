const path = require('path');
const express = require('express');
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const hbs = require('hbs');
hbs.registerPartials(partialsPath);
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));
app.get('', (req, res) => {
  res.render('index');
});

app.get('/triviagame', (req, res) => {
  res.render('triviagame');
});

app.get('/timeup', (req, res) => {
  res.render('timeup');
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(port);
