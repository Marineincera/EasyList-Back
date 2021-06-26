import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { ListRepository } from "../repositories/list.repository";


export class ListService extends AbstractService {
  protected repository = getCustomRepository(ListRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}