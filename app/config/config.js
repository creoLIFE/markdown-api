/**
 * Created by miroslawratman on 11/04/15.
 */

var path = require('path');

/**
 * Config module exports
 * @return [object]
 */
module.exports = {
    path: path.normalize(path.join(__dirname, '..')),
    port: process.env.NODE_PORT || 8080,
    tokenSecret: "J^cjJcrj6Rk6uxrJcV^vj",
};
