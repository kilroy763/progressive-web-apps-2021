// Importeren van de benodige stukken code
import {fetchDataSeason, fetchDataSeasonSaul} from './fetcher.js'
import {renderSeason, renderSeasonSaul} from './render.js'

// Door middel van Routie subpagina´s maken
export function router() {
    const breakingbad = document.getElementById('breakingbad');
    const bettercallsaul = document.getElementById('bettercallsaul')
    const breakingbadtekst = document.getElementById('breakingbadTekst')
    const bettercallsaultekst = document.getElementById('bettercallsaulTekst')
    const breakingbadnav = document.getElementById('breakingbadNav')
    const seasons = document.getElementById('seasons')
    const loader = document.getElementById('loader')

    routie({
        '': function () {
            bettercallsaul.classList.add('show');
            breakingbad.classList.add('show');
            seasons.classList.remove('show');
            breakingbadtekst.classList.add('hide')
            breakingbadtekst.classList.remove('show')
            bettercallsaultekst.classList.add('hide')
            bettercallsaultekst.classList.remove('show')
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
                bettercallsaultekst.classList.add('show')
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
                breakingbadtekst.classList.add('show')
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
            const dataSeasons = await fetchDataSeason(id)
            renderSeason(dataSeasons)
            document.body.style.backgroundImage = "url(https://images6.alphacoders.com/321/thumb-1920-321927.jpg)";
        },
        'bettercallsaul/season/:id': async function (id) {
            document.title = "Season " + id + ' Better Call Saul';
            breakingbad.classList.remove("show");
            bettercallsaul.classList.remove('show');
            seasons.classList.add('show');
            const dataSeasonsSaul = await fetchDataSeasonSaul(id)
            renderSeasonSaul(dataSeasonsSaul)
            document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp1930554.jpg)";
        }
    })
}