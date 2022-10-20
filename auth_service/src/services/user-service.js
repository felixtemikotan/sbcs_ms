const { UserRepository } = require("../database");
const { FormateData, GenerateSignature, ValidatePassword } = require('../utils');
const { APIError, BadRequestError } = require('../utils/app-errors')


// All Business logic will be here
class UserService {

    constructor() {
        this.repository = new UserRepository();
    }

    async SignIn(userInputs) {


        const { email, password } = userInputs;

        try {

            const existingUser = await this.repository.FindOneUser({ email });

            if (Object.keys(existingUser).length === 0) {
                return FormateData({ message: 'Email is incorrect' });
            } else {

                const validPassword = await ValidatePassword(password, existingUser.password);

                if (validPassword) {
                    const token = await GenerateSignature({ email: existingUser.email, _id: existingUser.id });

                    return FormateData({ user: existingUser, token });
                }
            }

            return FormateData({ message: 'Password is incorrect' });

        } catch (err) {
            throw new APIError('Data Not found', err)
        }


    }




    async GetProfile(email) {

        try {

            const existingUser = await this.repository.FindUser({ email });
            return FormateData(existingUser);

        } catch (err) {
            throw new APIError('Data Not found', err)
        }
    }


    async GetAllProfile(email) {

        try {

            const existingUser = await this.repository.FindAllUsers({ email });
            return FormateData(existingUser);

        } catch (err) {
            throw new APIError('Data Not found', err)
        }
    }



}

module.exports = UserService;