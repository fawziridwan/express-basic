const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();
// set views files
app.set('views', path.join(__dirname, 'views'));
// set engine template
app.set('view engine', 'hbs');
// initialize public assets
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
// default routes
app.get('/home', (req,res) => {
    // res.send('Welcome to Express'); //untuk render route
    res.render('index', {
        name: 'Home'
    });
});
// home routes with parameters
app.get('/home/:name', (req,res) => {
    res.render('index', {
        name: req.params.name
        
    });
});
// about routes pages
app.get('/about', (req,res) => {
    res.send('This is page about');
});

app.get('/post', (req, res) => {
    res.render('form');
});

app.post('/post', (req, res) => {
    res.render('index', {
        name: req.body.textname
    });
});

app.listen(8000, () => {
    console.log('Server is running at port 8000');
}); 