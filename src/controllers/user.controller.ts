import { Application} from "express";
import { commonController } from "../core/abstract.controller";
import { UserService } from "../services/user.service";

/**
 * @param app l'application express
 */
export const UserController = (app: Application) => {
  const userService = new UserService();

  const userRouter = commonController(userService);

  app.use("/users", userRouter);
};