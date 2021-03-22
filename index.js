// Require third-party modules
const express = require('express');
const request = require('request');
var path = require('path')
const fetch = require('node-fetch')
const render = require('./modules/render.js')


// Config object
const port = 3000;

// Create new express app in 'app'
const app = express();

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', redirect)

function redirect(req, res) {
    res.redirect('/breakingbad');
}


app.get('/breakingbad', render.BrBa);
app.get('/breakingbad/season/:season_number', render.seasonBrBa)

app.get('/bettercallsaul', render.Saul);
app.get('/bettercallsaul/season/:season_number', render.seasonSaul)

app.get('*', function(req, res) {
	// Send a plain string using res.send();
	res.render('notfound', {
	})
});


app.get('/offline', function(req, res) {
	// Send a plain string using res.send();
	res.render('offline', {
	})
});


// Actually set up the server
app.listen(process.env.PORT || port, function() {
    console.log(`Application started on port: ${port}`);
    console.log(`Application is visible on: http://localhost:${port}`);
});

