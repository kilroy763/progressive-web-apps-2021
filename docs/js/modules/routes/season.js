//algemene link van de images 
const img = "https://image.tmdb.org/t/p/w500";

//Renderen van seizoen naam
export function nameSeasons(dataSeasons) {
    let titel = document.getElementById('seasonsTitle')
    titel.innerHTML = dataSeasons.name
}

//Renderen van seizoen datum
export function air_date(dataSeasons) {
    let airDate = document.getElementById('SeasonsAirDate')
    airDate.innerHTML = dataSeasons.air_date
}

// plot van seizoen oproepen
export function overviewSeasons(dataSeasons) {
    let overviewseasons = document.getElementById('overviewseasons')
    overviewseasons.innerHTML = dataSeasons.overview
}

//Renderen van afsleveringen en namen
export function episodes(dataSeasons) {
    const info = document.getElementById('infoSeasons')
    info.innerHTML = '';
    const episodes = dataSeasons.episodes.map( episode => {
        let object = {}
        object.poster = episode.still_path
        object.name = episode.name
        return object 
    }
    )
    episodes.forEach((episode) => {
        let nieuwposter = document.createElement('img')
        let episodeName = document.createElement('h2')
        nieuwposter.src = img + episode.poster
        episodeName.textContent = episode.name;
        info.appendChild(nieuwposter)
        info.appendChild(episodeName)
    })
};

//Renderen van seizoens poster
export function poster_path(dataSeasons) {
    let poster = document.createElement("img");
    poster.src = img + dataSeasons.poster_path;
    let src = document.getElementById("seasonImg");
    src.innerHTML = '';
    src.appendChild(poster);

};