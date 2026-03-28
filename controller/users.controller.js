import usesrsService from "../service/usesrs.service.js ";

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

  async update(req, res, next) {
    try {
      const user = usesrsService.update(req.params.id, req.body);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        message: "User updated",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res) {
    const index = usesrsService.delete(req.params.id);

    if (!index) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User deleted",
      data: index,
    });
  }
}

export default new UsersCantroller();
