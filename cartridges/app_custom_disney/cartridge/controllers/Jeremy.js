'use strict'

var server = require('server');

server.get('Start', (req, res, next) => {
    res.render('home/homePage')
    next();
})

module.exports = server.exports();
