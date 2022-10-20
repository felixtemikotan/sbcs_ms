const QuoteService = require('../services/quotes-service');
const UserAuth = require('./middlewares/auth')

module.exports = (app) => {

    const service = new QuoteService();



    app.get('/', UserAuth, async(req, res, next) => {

        try {

            const { data } = await service.GetQuotes();

            return res.json(data);

        } catch (err) {
            next(err)
        }

    });




}