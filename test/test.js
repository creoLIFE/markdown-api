/**
 * Created by miroslawratman on 15/04/15.
 */

var falkor = require('../node_modules/falkor')

exports.testJsonContent = falkor.fetch('https://localhost:8080/parse')
    .evaluateWithJsonBody(function (test, json) {
        test.equals(json.____, '', 'No data in JSON')
    })