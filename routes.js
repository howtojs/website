const routes = require('next-routes');

module.exports = routes().add({
  name: 'doc-entry',
  pattern: '/docs/:category/:slug?',
  page: 'docs',
});
