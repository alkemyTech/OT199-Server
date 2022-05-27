const httpStatus = require("../helpers/httpStatus");
const { Activity } = require("../models");

class ActivityController {
    static async getActivities(req, res) {
        try {
            const getAllAct = await Activity.findAll();

            res
                .status(httpStatus.OK)
                .json([
                    getAllAct.name,
                    getAllAct.content,
                    getAllAct.image,
                ]);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
        }
    }

    static async getOneActivity(req, res) {
        const { name } = req.body;

        try {
            const getOneAct = await Activity.findOne({ where: { name } });

            res.status(httpStatus.OK).json([
                getOneAct.name,
                getOneAct.content,
                getOneAct.image,
                getOneAct.deletedAt,
            ]);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
        }
    }

    static async deleteActivities(req, res) {
        const { name } = req.body;

        try {
            const delAct = await Activity.destroy({ where: { name } });

            res.status(httpStatus.OK).json({ msg: `The ${delAct.name} was deleted` });

        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ msg: error.array });
        }
    }
}

module.exports = ActivityController;
