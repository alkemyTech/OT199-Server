require('dotenv').config()

class paginationHelper {

    static pagination(array, page, route) {
        let totalPage = Math.ceil(array.length) - 1;
        const url = `${process.env.HOST}/${route}/page?=`;
        let navPage = {}
        if (page > totalPage) {
            return `Page ${page} does not exists`
        }

        if (page >= 1 && (page + 1) < totalPage) {
            navPage.nextPage = url + (page + 1)
        }

        if (page <= totalPage && page > 1) {
            navPage.previousPage = url + (page - 1)
        }
        return navPage
    }

}

module.exports = paginationHelper

