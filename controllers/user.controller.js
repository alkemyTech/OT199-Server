const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");

class UserController {
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleteUser = await User.destroy({ where: { id: +id } });
      if (deleteUser) {
        res.status(StatusCodes.OK).send({ msg: `${deleteUser} was deleted` });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "Cannot delete user" });
      }
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Something went wrong" });
    }
  }
}

module.exports = UserController;
