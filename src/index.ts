import express from "express";


async function startServer() {
    // Récupération de l'application initiale
    const app = express();
  
    // Chargement des différent loader

  
    // Ajout des différentes route de votre application


      // Démarrage du serveur une fois que tout est correctement init
  app.listen(3000, () => console.log("Express server is running"));
}

startServer();