var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Article = mongoose.model('Article');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/', function(req, res, next) {
    Article.find(function(err, articles) {
        if (err) return next(err);
        res.render('index', {
            title: 'The Night Captain',
            articles: articles
        });
    });
});

router.get('/login', function(req, res, next) {
    res.render('login', {
        title: 'The Night Captain: Login'
    });
});
