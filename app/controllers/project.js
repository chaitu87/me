var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/projects', function(req, res, next) {
    res.render('projects',{
    	title: "Projects"
    });
});

router.get('/project/troops', function(req, res, next) {
    res.render('projects/troops/index',{
    	title: "Troops"
    });
});

router.get('/project/web-presentation', function(req, res, next) {
    res.render('projects/web-presentation/index',{
    	title: "Web Presentation"
    });
});
