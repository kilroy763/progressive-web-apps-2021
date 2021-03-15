 const fetchData = require('./fetch')


async function home(req,res) {
    const data = await fetchData()
    res.render('index', data);
 }