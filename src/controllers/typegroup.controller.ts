
import { Application, Request, Response } from "express";
import { TypegroupService } from "../services/typegroup.service";
import { commonController } from "../core/abstract.controller";


/**
 * Ce controller servira de modèle pour construire vos différent controller
 * Le controlle est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const TypegroupController = (app: Application) => {
  const typegroupService = new TypegroupService();

  const typegroupRouter = commonController(typegroupService);

  // Ajoutez les nouvelles routes ici
  typegroupRouter.get("/search/:typegroups", async (req: Request, res: Response) => {
    const tag = req.params.tag;

  });

  app.use("/typegroups", typegroupRouter);
};