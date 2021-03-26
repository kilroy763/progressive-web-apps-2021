// Third party modules
const express = require('express');
const request = require('request');
var path = require('path')
const fetch = require('node-fetch')
const render = require('./modules/render.js')


//  De poort voor localhost
const port = 3000;

// Maak nieuwe express app
const app = express();

// link de templating engine aan express
app.set('view engine', 'ejs');

// Aan express laten weten waar de templates staan
app.set('views', 'views');

// Express laten weten dat er gebruik wordt gemaakt van een statisch folder
app.use(express.static(path.join(__dirname, '/public')));

// Als de route "/" is dan moet de site geredirect worden naar "/breakingbad"
app.get('/', redirect)

function redirect(req, res) {
	res.redirect('/breakingbad');
}

// aangeven op welke routes welke paginas worden gerenderd
app.get('/breakingbad', render.BrBa);
app.get('/breakingbad/season/:season_number', render.seasonBrBa)
app.get('/bettercallsaul', render.Saul);
app.get('/bettercallsaul/season/:season_number', render.seasonSaul)

// offline pagina creeren
app.get('/offline', function (req, res) {
	res.render('offline', {
		pageTitle: "Offline"
	})
});

// als een niet gedefineerde route wordt opgegeven, toon dan de notfound page
app.get('*', function (req, res) {
	res.render('notfound', {
		pageTitle: "Page Not Found"
	})
});





// server set up
app.listen(process.env.PORT || port, function () {
	console.log(`Application started on port: ${port}`);
	console.log(`Application is visible on: http://localhost:${port}`);
});