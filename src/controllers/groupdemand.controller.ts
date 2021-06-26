
import { Application, Request, Response } from "express";
import { commonController } from "../core/abstract.controller";
import { GroupdemandService } from "../services/groupdemand.service";


/**
 * @param app l'application express
 */
export const GroupdemandController = (app: Application) => {
  const groupdemandService = new GroupdemandService();

  const groupdemandRouter = commonController(groupdemandService);


  app.use("/groupdemands", groupdemandRouter);
};