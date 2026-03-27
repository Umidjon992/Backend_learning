class UserService {
  users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Vali" },
  ];

  getAll() {
    return this.users;
  }

  create(data) {
    const { name } = data;

    const newUsers = { id: Date.now(), name };

    this.users.push(newUsers);

    return newUsers;
  }

  update(id, data) {
    const user = this.users.find((u) => u.id == id);

    if (!user) {
      return null;
    }

    user.name = data.name;

    return user;
  }

  delete(id) {
    const index = this.users.findIndex(u => u.id == id)

    if(index === -1) {
      return null
    }

    const deleteUsers = this.users.splice(index,1)

    return deleteUsers[0]
  }
}

export default new UserService();
