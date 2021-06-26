import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { TypelistRepository } from "../repositories/typelist.repository";


export class TypelistService extends AbstractService {
  protected repository = getCustomRepository(TypelistRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}