//algemene link van de images 
const img = "https://image.tmdb.org/t/p/w500";


//Renderen van de seizoen posters
function poster_pathSaul(dataSaul) {
    const info = document.getElementById('infoSaul')
    dataSaul.seasons.shift()
    const posters = dataSaul.seasons
    posters.forEach((poster, i) => {
        let nieuwposter = document.createElement('img')
        let posterlink = document.createElement('a')
        posterlink.href = `#BetterCallSaul/season/${poster.season_number}`
        nieuwposter.src = img + dataSaul.seasons[i].poster_path;
        posterlink.appendChild(nieuwposter)
        info.appendChild(posterlink)
    })
};

//Renderen van de seizoen namen
function seasonNameSaul(dataSaul) {
    const info = document.getElementById('infoSaul')
    const naam = dataSaul.seasons
    naam.forEach((poster, i) => {
        let seasonName = document.createElement('p')
        seasonName.textContent = dataSaul.seasons[i].name;
        info.appendChild(seasonName)
    })
};

// plot van serie oproepen
function overviewSaul(dataSaul) {
    let cont = document.getElementById('overviewSaul')
    cont.innerHTML = dataSaul.overview
}

// cijfer van serie oproepen
function vote_averageSaul(dataSaul) {
    let cont = document.getElementById('cijferSaul')
    cont.innerHTML = dataSaul.vote_average
}

// titel van serie oproepen
function nameSaul(dataSaul) {
    let cont = document.getElementById('titleSaul')
    cont.innerHTML = dataSaul.name
}

module.exports = {nameSaul, overviewSaul, poster_pathSaul, seasonNameSaul, vote_averageSaul}