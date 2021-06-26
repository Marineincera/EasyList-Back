import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { TypeitemRepository } from "../repositories/typeitem.repository";


export class TypeitemService extends AbstractService {
  protected repository = getCustomRepository(TypeitemRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}