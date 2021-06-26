import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { GroupeventRepository } from "../repositories/groupevent.repository";


export class GroupeventService extends AbstractService {
  protected repository = getCustomRepository(GroupeventRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}