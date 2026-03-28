import usersService from "../service/usesrs.service.js ";

class UsersController {
  async getAll(req, res) {
    const users = usersService.getAll();

    res.status(200).json({
      massage: "All users",
      data: users,
    });
  }

  async create(req, res) {
    const create = usersService.create(req.body);

    res.status(201).json({
      massage: "User created",
      data: create,
    });
  }

  async update(req, res, next) {
    try {
      const user = usersService.update(req.params.id, req.body);

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
    const index = usersService.delete(req.params.id);

    if (index === null) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User deleted",
      data: index,
    });
  }
}

export default new UsersController();
