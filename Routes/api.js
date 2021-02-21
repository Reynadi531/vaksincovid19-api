const router = require('express').Router()
const scrape = require('../util/scrape')
const ObjectToCsv = require('objects-to-csv')

router.get('/', (req, res) => {
    const url = `${req.protocol}://${req.hostname}${req.hostname == 'localhost' ? `:${process.env.PORT || 3000}` : ''}`;
    res.json({
        "messages": "Selamat datang di API data vaksin COVID-19 INDONESIA",
        "project source": "https://github.com/Reynadi531/vaksincovid19-api",
        "endpoints": {
            "json": {
                vaksin: `${url}/api/vaksin`   
            },
            "csv": {
                vaksin: `${url}/api/csv/vaksin`   
            }
        }
    })
})

router.get('/vaksin', async(req, res) => {
    const { totalsasaran, sasaranvaksinsdmk, populasivaksin, vaksinasi1, vaksinasi2, lastUpdate } = await scrape()
    res.json({
        totalsasaran,
        sasaranvaksinsdmk,
        populasivaksin,
        vaksinasi1,
        vaksinasi2,
        lastUpdate
    })
})

router.get('/csv/vaksin', async(req, res) => {
    const data = await scrape()
    const csvData = await (new ObjectToCsv([data])).toString()
    res.set("Content-Type", "text/csv")
    res.send(csvData)
    console.log(csvData)
})

module.exports = router