const { FormateData } = require("../utils");
const { APIError } = require('../utils/app-errors');
const axios = require('axios');

class QuoteService {

    async GetQuotes() {
        try {

            const quotes = await axios.get('https://type.fit/api/quotes')

            function getRandomArbitrary(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
            const quoteNumber = getRandomArbitrary(0, quotes.data.length - 1)
            const randomQuote = quotes.data[quoteNumber].text
            const author = quotes.data[quoteNumber].author
            const dispRes = `Hello, we have this quote for you by ${author}: ${randomQuote}`
            return FormateData(dispRes);


        } catch (err) {
            throw new APIError('Data Not found')
        }
    }



}

module.exports = QuoteService;