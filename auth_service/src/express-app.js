const express = require('express');
const cors = require('cors');
const HandleErrors = require('./utils/error-handler');
const users = require('./api/users');


module.exports = async(app) => {

    app.use(express.json({ limit: '1mb' }));
    app.use(express.urlencoded({ extended: true, limit: '1mb' }));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //api


    users(app)


    // error handling
    app.use(HandleErrors);

}