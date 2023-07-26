// Imports
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const app = express();
const port = 5000;

// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', urlencodedParser, [
    check('username', 'The username must be 3 or more characters')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'The email is invalid')
        .isEmail()
        .normalizeEmail(),

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array());
        const alert = errors.array();
        res.render('register', { alert });
    }
});

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
