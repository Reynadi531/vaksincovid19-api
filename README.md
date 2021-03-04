# API VAKSIN COVID-19 INDONESIA

![](https://forthebadge.com/images/badges/made-with-javascript.svg)
![](https://forthebadge.com/images/badges/built-with-love.svg)


Untuk project ini saya menggunakan express dan scrapping data dari [sini](https://www.kemkes.go.id/). Apabila terjadi kendala langsung hubungi saya, dan apabila website [KEMENKES](https://www.kemkes.go.id/) down, API ini akan erorr karena belum ada nya cache sistem yang baik. Project ini mungkin bukan untuk commercial use sebab scrapping bukanlah hal yang legal disemua website. Gunakan dengan bijak<br>

> * __**Update: Website KEMKES tidak support scrapping lagi sekarang beralih ke API [cekdiri.id](https://cekdiri.id/vaksinasi/)**__<br>
> * __**Warning: API sangat tidak stabil, daapt berubah ubah suatu saat mengikuti sumber data**__<br>

## Deployment
>[JSON API](https://vaksincovid19-api.now.sh/)<br>
>[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FReynadi531%2Fvaksincovid19-api%2F)

## Endpoints
* [/api/vaksin](https://vaksincovid19-api.now.sh/api/vaksin)
    > Menampilkan data dari [sini](https://www.kemkes.go.id/) menjadi JSON yang memuat: total sasaran vaksin, sasaran vaksin SDMK, populasi vaksin, vaksinasi-1,vaksinasi 2, dan lastUpdate
* [/api/csv/vaksin](https://vaksincovid19-api.now.sh/api/csv/vaksin)
    > Menampilkan data dari [sini](https://www.kemkes.go.id/) menjadi CSV yang memuat: total sasaran vaksin, sasaran vaksin SDMK, populasi vaksin, vaksinasi-1,vaksinasi 2, dan lastUpdate

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
