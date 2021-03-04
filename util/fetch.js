const axios = require('axios');

async function fetchCekDiri() {
    const { data } = await axios.get('https://cekdiri.id/vaksinasi/');
    const { monitoring, last_updated } = data;
    const latestData = monitoring[monitoring.length - 1];
    const { sasaran_vaksinasi_sdmk, vaksinasi1, vaksinasi2, total_sasaran_vaksinasi, sasaran_vaksinasi_lansia, sasaran_vaksinasi_petugas_publik } = latestData
    return {
        totalsasaran: total_sasaran_vaksinasi,
        sasaranvaksinsdmk: sasaran_vaksinasi_sdmk,
        sasaranvaksinlansia: sasaran_vaksinasi_lansia,
        sasaranvaksinpetugaspublik: sasaran_vaksinasi_petugas_publik,
        vaksinasi1,
        vaksinasi2,
        lastUpdate: last_updated
    }
}

module.exports = {
    fetchCekDiri
}