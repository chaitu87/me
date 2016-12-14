var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/snippets', function(req, res, next) {
    res.render('snippets');
});

router.get('/snippet/webworker', function(req, res, next) {
    res.render('snippets/webworker');
});