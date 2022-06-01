const httpStatus = require("../helpers/httpStatus");
const { Activity } = require("../models");

class ActivityController {

    static async getActivities(req, res) {
        try {
            const getAllAct = await Activity.findAll();
            res.status(httpStatus.OK).json(getAllAct);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
        }
    }

    static async getOneActivity(req, res) {
        const { name } = req.query;

        try {
            const getOneAct = await Activity.findOne({
                where: { name },
                attributes: ['name', 'content', 'image', 'deletedAt'],
            });

            res.status(httpStatus.OK).json(
                getOneAct);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
        }
    }


    static async deleteActivities(req, res) {
        const { name } = req.query;

        try {
            const delAct = await Activity.destroy({ where: { name } });

            res.status(httpStatus.OK).json({ msg: `The ${delAct.name} was deleted` });

        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
        }
    }

    static async updateActivity(req, res) {

        let activity = {};
        const { id } = req.params;
        const { name, content, image } = req.body;

        try {
            activity = await Activity.findByPk(id);
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            });
        };

        if (!activity) {
            return res.status(httpStatus.NOT_FOUND).json({
                msg: 'Activity does not exist'
            });
        };

        activity.name = name;
        activity.content = content;
        activity.image = image;

        try {
            await activity.save();
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            });
        };

        res.status(httpStatus.OK).json({
            msg: 'Activity was updated successfully',
            activity
        });
    };

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
