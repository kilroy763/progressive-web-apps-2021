'use strict';

const cors = 'https://api.themoviedb.org/3/'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const brba = "tv/1396"; //code voor breaking bad
const saul = "tv/60059"; //code voor better call saul
const season = "/season/"; // code voor seizoen 
const urlBrBa = `${cors}${brba}?api_key=${key}`; //samenvoegen van de link en key
const urlSaul = `${cors}${saul}?api_key=${key}`; //samenvoegen van de link en key
const fetch = require("node-fetch");
let dataResponse = {};

// Data fetchen van beide series
async function fetchData(saul) {
    saul ? dataResponse = await fetch(urlSaul) : dataResponse = await fetch(urlBrBa);
    const data = dataResponse.json();
    return data
}
// Data fetchen van breaking bad seizoenen
async function fetchDataSeason(id) {
    let urlSeason = `${cors}${brba}${season}${id}?api_key=${key}`; //samenvoegen van de link en key
    const dataResponse = await fetch(urlSeason);
    const data = dataResponse.json();
    return data
}
// Data fetchen van de better call saul seizoenen
async function fetchDataSeasonSaul(id) {
    let urlSeasonSaul = `${cors}${saul}${season}${id}?api_key=${key}`; //samenvoegen van de link en key
    const dataResponse = await fetch(urlSeasonSaul);
    const data = dataResponse.json();
    return data
}

//algemene link van de images 
 const img$2 = "https://image.tmdb.org/t/p/w500";

 //Renderen van de seizoen posters
 function poster_pathBrBa(dataBrBa) {
     const info = document.getElementById('infoBrba');
     dataBrBa.seasons.shift();
     const posters = dataBrBa.seasons;
     posters.forEach((poster, i) => {
         let nieuwposter = document.createElement('img');
         let posterlink = document.createElement('a');
         posterlink.href = `#breakingbad/season/${poster.season_number}`;
         nieuwposter.src = img$2 + dataBrBa.seasons[i].poster_path;
         posterlink.appendChild(nieuwposter);
         info.appendChild(posterlink);
     });
 }
 //Renderen van de seizoen namen
 function seasonNameBrBa(dataBrBa) {
     const info = document.getElementById('infoBrba');
     const naam = dataBrBa.seasons;
     naam.forEach((poster, i) => {
         let seasonName = document.createElement('p');
         seasonName.textContent = dataBrBa.seasons[i].name;
         info.appendChild(seasonName);
     });
 }
 // plot van serie oproepen
 function overviewBrBa(dataBrBa) {
     let cont = document.getElementById('overviewBrba');
     cont.innerHTML = dataBrBa.overview;
 }

 // cijfer van serie oproepen
 function vote_averageBrBa(dataBrBa) {
     let cont = document.getElementById('cijferBrba');
     cont.innerHTML = dataBrBa.vote_average;
 }

 // titel van serie oproepen    
 function nameBrBa(dataBrBa) {
     let cont = document.getElementById('titleBrba');
     cont.innerHTML = dataBrBa.name;
 }

//algemene link van de images 
const img$1 = "https://image.tmdb.org/t/p/w500";


//Renderen van de seizoen posters
function poster_pathSaul(dataSaul) {
    const info = document.getElementById('infoSaul');
    dataSaul.seasons.shift();
    const posters = dataSaul.seasons;
    posters.forEach((poster, i) => {
        let nieuwposter = document.createElement('img');
        let posterlink = document.createElement('a');
        posterlink.href = `#BetterCallSaul/season/${poster.season_number}`;
        nieuwposter.src = img$1 + dataSaul.seasons[i].poster_path;
        posterlink.appendChild(nieuwposter);
        info.appendChild(posterlink);
    });
}
//Renderen van de seizoen namen
function seasonNameSaul(dataSaul) {
    const info = document.getElementById('infoSaul');
    const naam = dataSaul.seasons;
    naam.forEach((poster, i) => {
        let seasonName = document.createElement('p');
        seasonName.textContent = dataSaul.seasons[i].name;
        info.appendChild(seasonName);
    });
}
// plot van serie oproepen
function overviewSaul(dataSaul) {
    let cont = document.getElementById('overviewSaul');
    cont.innerHTML = dataSaul.overview;
}

// cijfer van serie oproepen
function vote_averageSaul(dataSaul) {
    let cont = document.getElementById('cijferSaul');
    cont.innerHTML = dataSaul.vote_average;
}

// titel van serie oproepen
function nameSaul(dataSaul) {
    let cont = document.getElementById('titleSaul');
    cont.innerHTML = dataSaul.name;
}

//algemene link van de images 
const img = "https://image.tmdb.org/t/p/w500";

//Renderen van seizoen naam
function nameSeasons(dataSeasons) {
    let titel = document.getElementById('seasonsTitle');
    titel.innerHTML = dataSeasons.name;
}

//Renderen van seizoen datum
function air_date(dataSeasons) {
    let airDate = document.getElementById('SeasonsAirDate');
    airDate.innerHTML = dataSeasons.air_date;
}

// plot van seizoen oproepen
function overviewSeasons(dataSeasons) {
    let overviewseasons = document.getElementById('overviewseasons');
    overviewseasons.innerHTML = dataSeasons.overview;
}

//Renderen van afsleveringen en namen
function episodes(dataSeasons) {
    const info = document.getElementById('infoSeasons');
    info.innerHTML = '';
    const episodes = dataSeasons.episodes.map( episode => {
        let object = {};
        object.poster = episode.still_path;
        object.name = episode.name;
        return object 
    }
    );
    episodes.forEach((episode) => {
        let nieuwposter = document.createElement('img');
        let episodeName = document.createElement('h2');
        nieuwposter.src = img + episode.poster;
        episodeName.textContent = episode.name;
        info.appendChild(nieuwposter);
        info.appendChild(episodeName);
    });
}
//Renderen van seizoens poster
function poster_path(dataSeasons) {
    let poster = document.createElement("img");
    poster.src = img + dataSeasons.poster_path;
    let src = document.getElementById("seasonImg");
    src.innerHTML = '';
    src.appendChild(poster);

}

// Importeren van de gekozen data

function render(dataBrBa, dataSaul) {
    if (dataBrBa) {
        forRender(dataBrBa);
    }
    if (dataSaul) {
        forRenderSaul(dataSaul);
    }
}

function renderSeason(dataSeason) {
    forRenderSeasons(dataSeason);
}

function renderSeasonSaul(dataSeason) {
    forRenderSeasonsSaul(dataSeason);
}



//nodige elementen oproepen voor breaking bad
function forRender(putDataBrBa) {
    let dataBrBa = putDataBrBa;
    nameBrBa(dataBrBa);
    overviewBrBa(dataBrBa);
    poster_pathBrBa(dataBrBa);
    seasonNameBrBa(dataBrBa);
    vote_averageBrBa(dataBrBa);

}

//nodige elementen oproepen voor better call saul
function forRenderSaul(putDataSaul) {
    let dataSaul = putDataSaul;
    nameSaul(dataSaul);
    overviewSaul(dataSaul);
    poster_pathSaul(dataSaul);
    seasonNameSaul(dataSaul);
    vote_averageSaul(dataSaul);
}

//nodige elementen oproepen voor breaking bad seizoenen
function forRenderSeasons(putDataSeasons) {
    let dataSeasons = putDataSeasons;
    air_date(dataSeasons);
    nameSeasons(dataSeasons);
    poster_path(dataSeasons);
    overviewSeasons(dataSeasons);
    episodes(dataSeasons);
}

//nodige elementen oproepen voor better call saul seizoenen
function forRenderSeasonsSaul(putDataSeasonsSaul) {
    let dataSeasons = putDataSeasonsSaul;
    air_date(dataSeasons);
    nameSeasons(dataSeasons);
    poster_path(dataSeasons);
    overviewSeasons(dataSeasons);
    episodes(dataSeasons);
}

// Importeren van de benodige stukken code

// Door middel van Routie subpagina´s maken
function router() {
    const breakingbad = document.getElementById('breakingbad');
    const bettercallsaul = document.getElementById('bettercallsaul');
    const breakingbadtekst = document.getElementById('breakingbadTekst');
    const bettercallsaultekst = document.getElementById('bettercallsaulTekst');
    document.getElementById('breakingbadNav');
    const seasons = document.getElementById('seasons');
    document.getElementById('loader');

    routie({
        '': function () {
            bettercallsaul.classList.add('show');
            breakingbad.classList.add('show');
            seasons.classList.remove('show');
            breakingbadtekst.classList.add('hide');
            breakingbadtekst.classList.remove('show');
            bettercallsaultekst.classList.add('hide');
            bettercallsaultekst.classList.remove('show');
            document.title = "Breaking Bad / Better Call Saul ";
            document.body.style.backgroundImage = "url(https://external-preview.redd.it/2pS-PL4NrybhxY4Mk_08MjFPiWPbzADajJtiFlJreo4.jpg?auto=webp&s=09c2646c40bd8757770dda3883d39c778ee426a0)";
        },
        'bettercallsaul': function () {
            let resultSaul = bettercallsaul.classList.contains("show");
            if (resultSaul) {
                bettercallsaul.classList.remove('show');
            }
            let resultSaulTekst = bettercallsaultekst.classList.contains("hide");
            if (resultSaulTekst) {
                bettercallsaultekst.classList.add('show');
            }
            document.title = "Better Call Saul ";
            breakingbad.classList.remove('show');
            bettercallsaul.classList.toggle('show');
            seasons.classList.remove('show');
            document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp1930554.jpg)";
        },
        'breakingbad': function () {
            let resultBrBa = breakingbad.classList.contains("show");
            if (resultBrBa) {
                breakingbad.classList.remove('show');
            }
            let resultBrBaTekst = breakingbadtekst.classList.contains("hide");
            if (resultBrBaTekst) {
                breakingbadtekst.classList.add('show');
            }
            document.title = "Breaking Bad ";
            breakingbad.classList.toggle('show');
            bettercallsaul.classList.remove('show');
            seasons.classList.remove('show');
            document.body.style.backgroundImage = "url(https://images6.alphacoders.com/321/thumb-1920-321927.jpg)";
        },
        'breakingbad/season/:id': async function (id) {
            document.title = "Season " + id + ' breaking bad';
            breakingbad.classList.toggle("show");
            bettercallsaul.classList.remove('show');
            seasons.classList.add('show');
            const dataSeasons = await fetchDataSeason(id);
            renderSeason(dataSeasons);
            document.body.style.backgroundImage = "url(https://images6.alphacoders.com/321/thumb-1920-321927.jpg)";
        },
        'bettercallsaul/season/:id': async function (id) {
            document.title = "Season " + id + ' Better Call Saul';
            breakingbad.classList.remove("show");
            bettercallsaul.classList.remove('show');
            seasons.classList.add('show');
            const dataSeasonsSaul = await fetchDataSeasonSaul(id);
            renderSeasonSaul(dataSeasonsSaul);
            document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp1930554.jpg)";
        }
    });
}

// Importeren van de benodige stukken code

require("node-fetch");


// Alles laten runnenbrowserify 
(async function Init() {
    const dataBrBa = await fetchData(false);
    const dataSaul = await fetchData(true);
    render(dataBrBa, dataSaul);
    router();
})();
