// Imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('', (req, res)=> {
    res.render('index')
})

app.get('/register', (req, res)=> {
    res.render('register')
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
