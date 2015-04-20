/**
 * Created by miroslawratman on 12/04/15.
 */

var path = require('path');
var express = require('express');
var config = require('./config');
var multer = require('multer');
var bodyParser = require('body-parser');

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
};