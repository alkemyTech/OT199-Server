require('dotenv').config();

class PagesHelper {

  constructor(result, limit) {
    this.result = result;
    this.limit = limit;
  };

  getTotalPages() {
    return Math.ceil(this.result.count / this.limit);
  }

  isValidPage(page) {
    return page <= this.getTotalPages();
  }

  getResponse(hostname, route, page) {
    
    const url = `${ hostname }/${ route }/?page=`;
    const totalPages = this.getTotalPages();
    let nextPageUrl, previousPageUrl;

    if (page >= 1 && page < totalPages) {
      nextPageUrl = url + (page + 1);
    };

    if (page <= totalPages && page > 1) {
      previousPageUrl = url + (page - 1);
    };

    return {
      previousPageUrl,
      nextPageUrl,
      data: this.result.rows,
    };
  }
};

module.exports = PagesHelper;