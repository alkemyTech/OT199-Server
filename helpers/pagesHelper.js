require('dotenv').config();

class PagesHelper {

  static getTotalPages(totalRows, limit) {
    return Math.ceil(totalRows / limit);
  }

  static getPagesUrl(route, page, totalPage) {
    
    const url = `${ process.env.HOST }/${ route }/page?=`;
    let nextPageUrl, previousPageUrl;

    if (page >= 1 && page < totalPage) {
      nextPageUrl = url + (page + 1);
    };

    if (page <= totalPage && page > 1) {
      previousPageUrl = url + (page - 1);
    };

    return {
      nextPageUrl,
      previousPageUrl
    };
  }

};

module.exports = PagesHelper;