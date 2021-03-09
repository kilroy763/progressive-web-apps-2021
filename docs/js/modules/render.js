// Importeren van de gekozen data
const breaking = require('./routes/brba.js')
// import {nameBrBa, overviewBrBa, poster_pathBrBa, seasonNameBrBa, vote_averageBrBa} from './routes/brba.js'
const saul = require('./routes/saul.js')
// import {nameSaul, overviewSaul, poster_pathSaul, seasonNameSaul, vote_averageSaul} from './routes/saul.js'
const season = require('./routes/season.js')
// import {air_date, nameSeasons, episodes, poster_path, overviewSeasons} from './routes/season.js'

module.exports =  function render(dataBrBa, dataSaul) {
    if (dataBrBa) {
        forRender(dataBrBa)
    }
    if (dataSaul) {
        forRenderSaul(dataSaul)
    }
}

module.exports =   function renderSeason(dataSeason) {
    forRenderSeasons(dataSeason)
}

module.exports =   function renderSeasonSaul(dataSeason) {
    forRenderSeasonsSaul(dataSeason)
}



//nodige elementen oproepen voor breaking bad
module.exports =   function forRender(putDataBrBa) {
    let dataBrBa = putDataBrBa;
    breaking.nameBrBa(dataBrBa);
    breaking.overviewBrBa(dataBrBa);
    breaking.poster_pathBrBa(dataBrBa);
    breaking.seasonNameBrBa(dataBrBa);
    breaking.vote_averageBrBa(dataBrBa);

}

//nodige elementen oproepen voor better call saul
module.exports =   function forRenderSaul(putDataSaul) {
    let dataSaul = putDataSaul;
    saul.nameSaul(dataSaul);
    saul.overviewSaul(dataSaul);
    saul.poster_pathSaul(dataSaul);
    saul.seasonNameSaul(dataSaul);
    saul.vote_averageSaul(dataSaul);
}

//nodige elementen oproepen voor breaking bad seizoenen
module.exports =   function forRenderSeasons(putDataSeasons) {
    let dataSeasons = putDataSeasons;
    season.air_date(dataSeasons);
    season.nameSeasons(dataSeasons);
    season.poster_path(dataSeasons);
    season.overviewSeasons(dataSeasons);
    season.episodes(dataSeasons);
}

//nodige elementen oproepen voor better call saul seizoenen
module.exports =  function forRenderSeasonsSaul(putDataSeasonsSaul) {
    let dataSeasons = putDataSeasonsSaul;
    season.air_date(dataSeasons);
    season.nameSeasons(dataSeasons);
    season.poster_path(dataSeasons);
    season.overviewSeasons(dataSeasons);
    season.episodes(dataSeasons);
}

