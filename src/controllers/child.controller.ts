
import { Application } from "express";
import { commonController } from "../core/abstract.controller";
import { ChildService } from "../services/child.service";

/**
 * @param app l'application express
 */
export const ChildController = (app: Application) => {
  const childService = new ChildService();

  const childRouter = commonController(childService);


  app.use("/children", childRouter);
};