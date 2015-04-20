/**
 * Created by miroslawratman on 12/04/15.
 */

var controllers = require('../controllers')

/**
 * Routes module exports
 * @param [express instance] app
 * @return [void]
 */
module.exports = function (app) {
    app.get('/', controllers.index);
    app.post('/parse', controllers.api.parseMarkdown);
};