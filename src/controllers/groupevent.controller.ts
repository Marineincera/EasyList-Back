
import { Application} from "express";
import { commonController } from "../core/abstract.controller";
import { GroupeventService } from "../services/groupevent.service";

/**
 * @param app l'application express
 */
export const GroupeventController = (app: Application) => {
  const groupeventService = new GroupeventService();

  const groupeventRouter = commonController(groupeventService);


  app.use("/groupevents", groupeventRouter);
};