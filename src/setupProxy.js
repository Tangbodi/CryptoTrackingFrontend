const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1',  // Match the API path exactly
    createProxyMiddleware({
      target: 'http://192.168.86.42:8080',
      changeOrigin: true,
      pathRewrite: { '^/api/v1': '/api/v1' },  // If no rewrite is needed, you can skip or adjust this
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying request:', req.url);  // Log requests for debugging
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err);  // Log errors
        res.status(500).send('Proxy error occurred.');
      }
    })
  );
};

