var url = require('url');

function replaceUrlQuery(req, query) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.baseUrl,
    search: query
  });
}
module.exports = replaceUrlQuery;