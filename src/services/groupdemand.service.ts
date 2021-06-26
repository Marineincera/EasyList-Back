import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { GroupdemandRepository } from "../repositories/groupdemand.repository";


export class GroupdemandService extends AbstractService {
  protected repository = getCustomRepository(GroupdemandRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}