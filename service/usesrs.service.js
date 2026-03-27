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

  delete(id,data) {
    const user_d = this.users.findIndex(u => u.id == id)

    if(data === -1) {
      return null
    }

    this.users.splice(user_d,1)

    return user_d
  }
}

export default new UserService();
