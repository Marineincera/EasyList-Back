import { Application} from "express";
import { commonController } from "../core/abstract.controller";
import { TypelistService } from "../services/typelist.service";

/**
 * @param app l'application express
 */
export const TypelistController = (app: Application) => {
  const typelistService = new TypelistService();

  const typelistRouter = commonController(typelistService);

  app.use("/typelists", typelistRouter);
};