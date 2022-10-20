const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { APP_SECRET } = require('../config');

//Utility functions


module.exports.GeneratePassword = async(password) => {
    return await password;
};


module.exports.ValidatePassword = async(enteredPassword, savedPassword) => {
    return await this.GeneratePassword(enteredPassword) === savedPassword;
};

module.exports.GenerateSignature = async(payload) => {
        return await jwt.sign(payload, APP_SECRET, { expiresIn: '1d' })
    },

    module.exports.ValidateSignature = async(req) => {

        const signature = req.get('Authorization');



        if (signature) {
            try {
                const payload = await jwt.verify(signature.split(' ')[1], APP_SECRET);
                req.user = payload;
                return true;
            } catch (err) {
                return false
            }


        }

        // return false
    };

module.exports.FormateData = (data) => {
    if (data) {
        return { data }
    } else {
        throw new Error('Data Not found!')
    }
}