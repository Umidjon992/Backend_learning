import express from "express";
import { UsersRouter } from "./routers/usesrs.router.js";

const app = express();
app.use(express.json());
const PORT = 4100

app.use("/users", UsersRouter())

// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
// ];

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// app.post("/users", (req, res) => {
//   const newUsers = {
//     id: Date.now(),
//     name: req.body.name,
//   };

//   users.push(newUsers);

//   res.status(201).json({
//     massage: "User created",
//     data: newUsers,
//   });
// });

// app.put("/users/:id", (req, res) => {
//   const user = users.find((u) => u.id == req.params.id);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   user.name = req.body.name;

//   res.json({
//     message: "User updated",
//     data: user,
//   });
// });

// app.delete("/users/:id", (req, res) => {
//   const index = users.findIndex((u) => u.id == req.params.id);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users.splice(index, 1);

//   res.json({ message: "User deleted" });
// });

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
