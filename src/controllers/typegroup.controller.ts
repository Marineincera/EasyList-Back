
import { Application, Request, Response } from "express";
import { TypegroupService } from "../services/typegroup.service";
import { commonController } from "../core/abstract.controller";

/**
 * @param app l'application express
 */
export const TypegroupController = (app: Application) => {
  const typegroupService = new TypegroupService();

  const typegroupRouter = commonController(typegroupService);

  typegroupRouter.get("/search/:typegroups", async (req: Request, res: Response) => {
    const tag = req.params.tag;

  });

  app.use("/typegroups", typegroupRouter);
};