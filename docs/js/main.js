// Importeren van de benodige stukken code
import {fetchData} from './modules/fetcher.js'
import {render} from './modules/render.js'
import {router} from './modules/router.js'


// Alles laten runnen
(async function Init() {
    const dataBrBa = await fetchData(false)
    const dataSaul = await fetchData(true)
    render(dataBrBa, dataSaul)
    router()
})()

