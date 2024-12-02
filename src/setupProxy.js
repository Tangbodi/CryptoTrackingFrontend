// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1', // The path you want to proxy
    createProxyMiddleware({
      target: 'http://192.168.86.42:8080/api/v1', // Your backend API URL
      changeOrigin: true,
    })
  );
};

