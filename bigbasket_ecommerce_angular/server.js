const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://freeapi.gerasim.in',
  changeOrigin: true,
  pathRewrite: {
    '^/': '', // Remove /api prefix when forwarding to the target
  },
}));

app.listen(3000, () => {
  console.log('Proxy server listening o222n port 3000');
});
