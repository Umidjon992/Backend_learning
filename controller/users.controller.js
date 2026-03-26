import usesrsService from "../service/usesrs.service.js";

class UsersCantroller {
  async getAll(req, res) {
    const users = usesrsService.getAll();

    res.status(200).json({
      massage: "All users",
      data: users,
    });
  }

  async create(req, res) {
    const create = usesrsService.create(req.body);

    res.status(201).json({
      massage: "User created",
      data: create,
    });
  }
}

export default new UsersCantroller()