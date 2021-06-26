import { Application} from "express";
import { commonController } from "../core/abstract.controller";
import { ItemService } from "../services/item.service";

/**
 * @param app l'application express
 */
export const ItemController = (app: Application) => {
  const itemService = new ItemService();

  const itemRouter = commonController(itemService);

  app.use("/items", itemRouter);
};