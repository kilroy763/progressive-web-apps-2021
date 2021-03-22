 const fetcher = require('./fetch')


async function BrBa(req,res) {
    const data = await fetcher.fetchDataBrBa()
    res.render('breakingbad', {data:data});
 }

 async function Saul(req,res) {
    const data = await fetcher.fetchDataSaul()
    res.render('saul', {data:data});
 }

 async function seasonSaul(req,res) {
     const urlSeason = `https://api.themoviedb.org/3/tv/60059/season/${req.params.season_number}?api_key=ae3a232f0096c607ad590f0ec850e635`;
     const data = await fetcher.fetchDataSeasonSaul(urlSeason)
     res.render('season', {data:data})
 }

 async function seasonBrBa(req,res) {
    const urlSeason = `https://api.themoviedb.org/3/tv/1396/season/${req.params.season_number}?api_key=ae3a232f0096c607ad590f0ec850e635`;
    const data = await fetcher.fetchDataSeasonSaul(urlSeason)
    res.render('season', {data:data})
}


module.exports = {BrBa, Saul, seasonSaul, seasonBrBa}