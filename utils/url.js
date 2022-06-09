var url = require('url');

function replaceUrlQuery(req, query) {
  console.log(req.protocol);
  console.log(req.originalUrl);
  console.log(req.get('host'));

  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.baseUrl,
    search: query
  });
}
module.exports = replaceUrlQuery;