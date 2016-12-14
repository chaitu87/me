var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/projects', function(req, res, next) {
    res.render('projects');
});
