const PORT = 3000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const {response} = require("express");

const app = express()

const url = 'https://www.google.nl/search?q=https://myascentium.com/ApplyNow/CommCredit&ei=_W1AY47rO42Z-Aa2xqOwAw&start=0&sa=N&ved=2ahUKEwjO3eLy3c76AhWNDN4KHTbjCDY4ChDy0wN6BAgBEAQ&biw=1512&bih=791&dpr=2'

axios(url)
    .then(response => {
        const html = response.data
        const D = cheerio.load(html)
        const companies = []

        D('.TbwUpd NJjxre', html).each(function() {
            const companyName = D(this).find('iUh30 qLRx3b tjvcx').text()
            companies.push({
                companyName
            })
        })
        console.log(companies)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))