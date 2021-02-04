const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async(url) => {
    let returnData;
    try {
        const { data, error } = await axios.get(url)
        if(!error) {returnData = cheerio.load(data)}
    } catch (error) {
        console.error(error)
        returnData = null
    }
    return returnData
}