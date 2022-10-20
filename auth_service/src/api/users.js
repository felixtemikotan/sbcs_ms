const UserService = require('../services/user-service');
const UserAuth = require('./middlewares/auth');

module.exports = (app) => {

    const service = new UserService();


    app.post('/', async(req, res, next) => {

        try {


            const { email, password } = req.body;

            const { data } = await service.SignIn({ email, password });

            return res.json(data);

        } catch (err) {
            next(err)
        }

    });



    app.get('/profile', async(req, res, next) => {

        try {


            const email = req.body.email;
            const { data } = await service.GetProfile({ email });


            return res.json(data);

        } catch (err) {
            next(err)
        }
    });





}