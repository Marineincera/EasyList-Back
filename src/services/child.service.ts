import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { ChildRepository } from "../repositories/child.repository";


export class ChildService extends AbstractService {
  protected repository = getCustomRepository(ChildRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}