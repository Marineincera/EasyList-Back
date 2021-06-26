import express from "express";
import loaders from "./loaders";

import { TypegroupController } from "./controllers/typegroup.controller";
import { ChildController } from "./controllers/child.controller";
import { GroupdemandController } from "./controllers/groupdemand.controller";
import { GroupeventController } from "./controllers/groupevent.controller";
import { ItemController } from "./controllers/item.controller";
import { ListController } from "./controllers/list.controller";
import { TypeitemController } from "./controllers/typeitem.controller";
import { TypelistController } from "./controllers/typelist.controller";
import { UserController } from "./controllers/user.controller";


async function startServer() {
    // Récupération de l'application initiale
    const app = express();
  
    // Chargement des différent loader
    await loaders(app);
  
    // Ajout des différentes route de votre application
    ChildController(app)
    GroupdemandController(app)
    GroupeventController(app)
    ItemController(app)
    ListController(app)
    TypegroupController(app)
    TypeitemController(app)
    TypelistController(app)
    UserController(app)

      // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log("Express server is running"));
}

startServer();