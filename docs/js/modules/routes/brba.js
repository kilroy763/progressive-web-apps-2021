 //algemene link van de images 
 const img = "https://image.tmdb.org/t/p/w500";

 //Renderen van de seizoen posters
function poster_pathBrBa(dataBrBa) {
     const info = document.getElementById('infoBrba')
     dataBrBa.seasons.shift()
     const posters = dataBrBa.seasons
     posters.forEach((poster, i) => {
         let nieuwposter = document.createElement('img')
         let posterlink = document.createElement('a')
         posterlink.href = `#breakingbad/season/${poster.season_number}`
         nieuwposter.src = img + dataBrBa.seasons[i].poster_path;
         posterlink.appendChild(nieuwposter)
         info.appendChild(posterlink)
     })
 };

 //Renderen van de seizoen namen
 function seasonNameBrBa(dataBrBa) {
     const info = document.getElementById('infoBrba')
     const naam = dataBrBa.seasons
     naam.forEach((poster, i) => {
         let seasonName = document.createElement('p')
         seasonName.textContent = dataBrBa.seasons[i].name;
         info.appendChild(seasonName)
     })
 };

 // plot van serie oproepen
 function overviewBrBa(dataBrBa) {
     let cont = document.getElementById('overviewBrba')
     cont.innerHTML = dataBrBa.overview
 }

 // cijfer van serie oproepen
function vote_averageBrBa(dataBrBa) {
     let cont = document.getElementById('cijferBrba')
     cont.innerHTML = dataBrBa.vote_average
 }

 // titel van serie oproepen    
 function nameBrBa(dataBrBa) {
     let cont = document.getElementById('titleBrba')
     cont.innerHTML = dataBrBa.name
 }

 module.exports = {poster_pathBrBa, overviewBrBa, nameBrBa, seasonNameBrBa, vote_averageBrBa}