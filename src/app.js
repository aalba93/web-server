const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andres Alba'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andres Alba'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpfull text',
        title: 'Help',
        name: 'Andres Alba'
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
