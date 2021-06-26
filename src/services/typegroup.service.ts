import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";

import { TypegroupRepository } from "../repositories/typegroup.repository"

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique doit apparaitre.
 * Attention ! En mettre le moins possible dans le controlleur
 */
export class TypegroupService extends AbstractService {
  protected repository = getCustomRepository(TypegroupRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}