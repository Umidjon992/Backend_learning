import express from "express";
import usersController from "../controller/users.controller.js";
import { loggerMiddleware } from "../middlewares/logger.middleware.js";
import { validateMiddleware } from "../middlewares/validate.middleware.js";

export const UsersRouter = () => {
  const router = express.Router();

  router.get("/", loggerMiddleware, usersController.getAll);
  router.post(
    "/",
    loggerMiddleware,
    validateMiddleware,
    usersController.create,
  );
  router.put(
    "/:id",
    loggerMiddleware,
    validateMiddleware,
    usersController.update,
  );
  router.delete(
    "/:id",
    loggerMiddleware,
    validateMiddleware,
    usersController.delete,
  );

  return router;
};
