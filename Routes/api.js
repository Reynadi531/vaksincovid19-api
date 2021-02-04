const router = require('express').Router()
const scrape = require('../util/scrape')
const { PORT } = require('../index')

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
    const { totalsasaran, sasaranvaksinsdmk, vaksinasi1, vaksinasi2 } = await scrape()
    res.json({
        totalsasaran,
        sasaranvaksinsdmk,
        vaksinasi1,
        vaksinasi2,
        lastUpdate: new Date()

    })
})

module.exports = router