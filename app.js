const express = require('express');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8000;

const app = express();

app.use('/static', express.static('static'));
app.use('/img', express.static('img'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const title = 'Julias Dance Website';
    const params = { 'title': title};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res) => {
    const title = 'Julias Dance Website';
    const params = { 'title': title};
    res.status(200).render('contact.pug', params);
});

app.listen(port, () => {
    console.log(`Server Running at http://${hostname}:${port}/`);
});
