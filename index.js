module.exports = {
  name: 'ember-cli-cors',

  serverMiddleware({ app }) {
    app.use((request, response, next) => {
      response.set('Access-Control-Allow-Origin', '*');
      next();
    });
  }
};
