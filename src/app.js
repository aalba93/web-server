const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Mead'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpfull text'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is showing',
        location: 'Philadelphia'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
