const cheerio = require('cheerio')
const fetcher = require('./fetcher')
const dataBulan = require('./bulan.json')

module.exports = async() => {
    const $ = await fetcher('https://www.kemkes.go.id/')
    const totalsasaran = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(1) > td.case').text().split('.').join(''))
    const sasaranvaksinsdmk = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(2) > td.case').text().split('.').join(''))
    const registrasiulang = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(3) > td.case').text().split('.').join(''))
    const vaksinasi1 = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(4) > td.case').text().split('.').join(''))
    const vaksinasi2 = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(5) > td.case').text().split('.').join(''))
    const rawTanggal = $('#vbMainLayer > div:nth-child(10) > div > ul > li.info-date').text().split(' ').slice(1)
    const bulan = Number(dataBulan.indexOf(rawTanggal[1]))
    const tanggalProcessed = new Date(rawTanggal[2], bulan, rawTanggal[0])
    return {totalsasaran, sasaranvaksinsdmk, registrasiulang, vaksinasi1, vaksinasi2, tanggalProcessed}
}