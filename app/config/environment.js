/**
 * Created by miroslawratman on 12/04/15.
 */

var path = require('path');
var express = require('express');
var config = require('./config');
var multer = require('multer');
var bodyParser = require('body-parser');
var getRawBody = require('raw-body')

/**
 * Environment module exports
 * @param [express instance] app
 * @return [object]
 */
module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
    app.set('port', config.port);
    app.use(express.static(path.join(config.path, 'public')));
    app.use(multer({ dest: '../uploads/'}));
    app.use(function (req, res, next) {
        req.rawBody = '';
        req.setEncoding('utf8');

        req.on('data', function (chunk) {
            req.rawBody += chunk;
        });

        req.on('end', function () {
            next();
        });
    });
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://markdown-spa.local');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
};