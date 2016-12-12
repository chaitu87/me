var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'me'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/me-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'me'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/me-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'me'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/me-production'
  }
};

module.exports = config[env];
