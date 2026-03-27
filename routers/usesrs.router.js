import express from "express";
import usesrsController from "../controller/users.controller.js";

export const UsersRouter = () => {
  const router = express.Router();

  router.get("/", usesrsController.getAll);
  router.post("/", usesrsController.create);
  router.put("/:id", usesrsController.update);
  router.delete("/:id", usesrsController.delete);

  return router
};
