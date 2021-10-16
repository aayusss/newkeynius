const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://keyniusdevwe-api.azurewebsites.net/',
      changeOrigin: true,
    })
  );
};
