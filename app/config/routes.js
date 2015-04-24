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
    app.post('/parse-file', controllers.api.parseMarkdownFile);
    app.post('/parse-content', controllers.api.parseMarkdownContent);
    app.post('/parse-content/:depth', controllers.api.parseMarkdownContent);
};