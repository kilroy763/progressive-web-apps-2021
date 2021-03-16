 const fetcher = require('./fetch')


async function BrBa(req,res) {
    const data = await fetcher.fetchDataBrBa()
    res.render('index', {data:data});
 }

 async function Saul(req,res) {
    const data = await fetcher.fetchDataSaul()
    res.render('index', {data:data});
 }



//  async function episodes(req, res) {
//     const api_url = `https://api.themoviedb.org/3/tv/1396/season/${req.params.season_number}?api_key=ae3a232f0096c607ad590f0ec850e635`;
//     const fetch_response = await fetch(api_url);
//     const json = await fetch_response.json();
//     res.render('season', {
//         data: json
//     })
// }

module.exports = {BrBa, Saul}