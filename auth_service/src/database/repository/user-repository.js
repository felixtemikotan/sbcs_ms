//const { CustomerModel, AddressModel } = require('../models');
const { APIError, BadRequestError, STATUS_CODES } = require('../../utils/app-errors')
const { FormateData } = require('../../utils');

const regUser = require('../user');

//Dealing with data base operations
class UserRepository {


    async FindUser({ email }) {
        try {
            let loggedInUser = {};
            const loggedUser = regUser.forEach((user) => {
                let resUser = {};
                if (user.email === email.email) {
                    loggedInUser = user;
                }
            });
            if (Object.keys(loggedInUser).length === 0) {
                return FormateData({ message: 'Email is incorrect' });
            }
            return loggedInUser;
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find User')
        }
    }

    async FindOneUser({ email }) {
        try {
            let loggedInUser = {};
            const loggedUser = regUser.forEach((user) => {
                let resUser = {};
                if (user.email === email) {
                    loggedInUser = user;
                }
            });

            if (Object.keys(loggedInUser).length === 0) {
                return {};
            }
            return loggedInUser;
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find User')
        }
    }


    async FindAllUsers() {
        try {
            return regUser;
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find User')
        }
    }


}

module.exports = UserRepository;