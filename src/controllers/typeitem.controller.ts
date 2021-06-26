import { Application} from "express";
import { commonController } from "../core/abstract.controller";
import { TypeitemService } from "../services/typeitem.service";

/**
 * @param app l'application express
 */
export const TypeitemController = (app: Application) => {
  const typeitemService = new TypeitemService();

  const typeitemRouter = commonController(typeitemService);

  app.use("/typeitems", typeitemRouter);
};