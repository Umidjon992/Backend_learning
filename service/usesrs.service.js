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

    const newUsers = { id: Date.now(), name }

    this.users.push(newUsers)

    return newUsers
  }
}

export default new UserService()