const router = require('express').Router()
const scrape = require('../util/scrape')

router.get('/', (req, res) => {
    const url = `${req.protocol}://${req.hostname}${req.hostname == 'localhost' ? `:${process.env.PORT || 3000}` : ''}`;
    res.json({
        "messages": "Selamat datang di API data vaksin COVID-19 INDONESIA",
        "project source": "https://github.com/Reynadi531/vaksincovid19-api",
        "endpoints": {
            vaksin: `${url}/api/vaksin`   
        }
    })
})

router.get('/vaksin', async(req, res) => {
    const { totalsasaran, sasaranvaksinsdmk, registrasiulang, vaksinasi1, vaksinasi2, tanggalProcessed } = await scrape()
    res.json({
        totalsasaran,
        sasaranvaksinsdmk,
        registrasiulang,
        vaksinasi1,
        vaksinasi2,
        lastUpdate: tanggalProcessed

    })
})

module.exports = router