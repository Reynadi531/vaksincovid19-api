const cheerio = require('cheerio')
const fetcher = require('./fetcher')

module.exports = async() => {
    const $ = await fetcher('https://www.kemkes.go.id/')
    const totalsasaran = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(1) > td.case').text().split('.').join(''))
    const sasaranvaksinsdmk = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(2) > td.case').text().split('.').join(''))
    const vaksinasi1 = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(4) > td.case').text().split('.').join(''))
    const vaksinasi2 = Number($('#vbMainLayer > div:nth-child(10) > div > ul > li:nth-child(7) > table > tbody > tr:nth-child(5) > td.case').text().split('.').join(''))
    return {totalsasaran, sasaranvaksinsdmk, vaksinasi1, vaksinasi2}
}