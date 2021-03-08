// Importeren van de gekozen data
import {nameBrBa, overviewBrBa, poster_pathBrBa, seasonNameBrBa, vote_averageBrBa} from './routes/brba.js'
import {nameSaul, overviewSaul, poster_pathSaul, seasonNameSaul, vote_averageSaul} from './routes/saul.js'
import {air_date, nameSeasons, episodes, poster_path, overviewSeasons} from './routes/season.js'

export function render(dataBrBa, dataSaul) {
    if (dataBrBa) {
        forRender(dataBrBa)
    }
    if (dataSaul) {
        forRenderSaul(dataSaul)
    }
}

export function renderSeason(dataSeason) {
    forRenderSeasons(dataSeason)
}

export function renderSeasonSaul(dataSeason) {
    forRenderSeasonsSaul(dataSeason)
}



//nodige elementen oproepen voor breaking bad
export function forRender(putDataBrBa) {
    let dataBrBa = putDataBrBa;
    nameBrBa(dataBrBa);
    overviewBrBa(dataBrBa);
    poster_pathBrBa(dataBrBa);
    seasonNameBrBa(dataBrBa);
    vote_averageBrBa(dataBrBa);

}

//nodige elementen oproepen voor better call saul
export function forRenderSaul(putDataSaul) {
    let dataSaul = putDataSaul;
    nameSaul(dataSaul);
    overviewSaul(dataSaul);
    poster_pathSaul(dataSaul);
    seasonNameSaul(dataSaul);
    vote_averageSaul(dataSaul);
}

//nodige elementen oproepen voor breaking bad seizoenen
export function forRenderSeasons(putDataSeasons) {
    let dataSeasons = putDataSeasons;
    air_date(dataSeasons);
    nameSeasons(dataSeasons);
    poster_path(dataSeasons);
    overviewSeasons(dataSeasons);
    episodes(dataSeasons);
}

//nodige elementen oproepen voor better call saul seizoenen
export function forRenderSeasonsSaul(putDataSeasonsSaul) {
    let dataSeasons = putDataSeasonsSaul;
    air_date(dataSeasons);
    nameSeasons(dataSeasons);
    poster_path(dataSeasons);
    overviewSeasons(dataSeasons);
    episodes(dataSeasons);
}

