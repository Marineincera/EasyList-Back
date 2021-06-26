import { Application} from "express";
import { ItemService } from "src/services/item.service";
import { commonController } from "../core/abstract.controller";

/**
 * @param app l'application express
 */
export const ItemController = (app: Application) => {
  const itemService = new ItemService();

  const itemRouter = commonController(itemService);

  app.use("/items", itemRouter);
};