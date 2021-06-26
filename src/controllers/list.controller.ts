import { Application} from "express";
import { commonController } from "../core/abstract.controller";
import { ListService } from "../services/list.service";

/**
 * @param app l'application express
 */
export const ListController = (app: Application) => {
  const listService = new ListService();

  const listRouter = commonController(listService);

  app.use("/lists", listRouter);
};