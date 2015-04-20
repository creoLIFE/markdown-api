/**
 * Created by miroslawratman on 13/04/15.
 */

var config = require('../config/config');
var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser');
var fs = require('fs');
var markdownParser = require('creolife-markdown-to-json');

/**
 * Method will generate random number
 * @param [integer] from
 * @param [integer] to
 * @return [integer]
 */
function random(from, to) {
    return Math.random() * (to - from) + from;
}


/**
 * Api main controller module exports
 * @return [object]
 */
module.exports = {

    /**
     * Method will parse uploaded markdown file and send JSON as a response
     * @param [object] req
     * @param [object] res
     * @param [function] next - callback function
     * @return [void]
     */
    parseMarkdown: function (req, res, next) {
        try {
            console.log(req.files.markdown);
            markdownParser.parse({fileName: req.files.markdown.path, depth:2}, function(data){
                fs.unlink(req.files.photo.path, function (err) {
                    if (err) return res.status(401).send({type: "TemporaryFileNotDeleted", message: "Temporary file wasnt deleted."});
                });
                res.status(200).send(JSON.stringify(data));
            });
        }
        catch (e) {
            return res.status(500).send({type: "InternalServerError", message: "Error occured durring file parse."});
        }
    }
}