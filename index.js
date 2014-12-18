module.exports = {
  name: 'ember-cli-cors',

  config: function(environment /*, appConfig */) {
    return {};
  },

  serverMiddleware: function(config) {
    config.app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    });
  }
};
