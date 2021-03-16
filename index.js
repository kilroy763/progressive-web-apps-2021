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



app.get('/season/:season_number', async(req, res) =>{
    const api_url = `https://api.themoviedb.org/3/tv/1396/season/${req.params.season_number}?api_key=ae3a232f0096c607ad590f0ec850e635`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    console.log(json)
    console.log(api_url)
    res.render('season', {
        data: json
    }
    )
})

app.get('/breakingbad', render.BrBa);
app.get('/bettercallsaul', render.Saul);



// Actually set up the server
app.listen(process.env.PORT || port, function() {
	console.log(`Application started on port: ${port}`);
});

