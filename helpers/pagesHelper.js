const url = require('url');

class PagesHelper {

  constructor(req, page, limit) {
    this.url = url.format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.baseUrl
    });
    this.page = page;
    this.limit = limit || 10;
  };

  getLimit() {
    return this.limit;
  }

  isValidPage(count) {
    return this.page <= Math.ceil(count / this.limit);
  }

  getResponse({ count, rows }) {
    const totalPages = Math.ceil(count / this.limit);
    let nextPageUrl, previousPageUrl;
    const urlQuery = '?page=';

    if (this.page >= 1 && this.page < totalPages) {
      nextPageUrl = this.url + urlQuery + (this.page + 1);
    };

    if (this.page <= totalPages && this.page > 1) {
      previousPageUrl = this.url + urlQuery + (this.page - 1);
    };

    return {
      previousPageUrl,
      nextPageUrl,
      data: rows
    };
  }
};

module.exports = PagesHelper;