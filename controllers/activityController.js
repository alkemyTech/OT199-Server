const { Activity } = require('../models');
const httpStatus = require('../helpers/httpStatus')
class ActivityController {
    static async createActivity(req, res){
        let { name, content, image } = req.body
        try {
            let resolve = await Activity.create({ name, content, image })
            res.status(httpStatus.CREATED).json({
                msg : "successful creation",
                resolve
            })
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : error
            })
        }
    }
};

module.exports = ActivityController;