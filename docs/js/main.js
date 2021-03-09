// Importeren van de benodige stukken code
const fetcher = require('./modules/fetcher');
// import {fetchData} from './modules/fetcher.js'
const render = require('./modules/render.js')
// import {render} from './modules/render.js'
const router = require('./modules/router.js')
// import {router} from './modules/router.js'
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Alles laten runnenbrowserify 
(async function Init() {
    const dataBrBa = await fetcher.fetchData(false)
    const dataSaul = await fetcher.fetchData(true)
    render(dataBrBa, dataSaul)
    router()
})()

