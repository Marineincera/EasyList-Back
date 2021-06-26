import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { ItemRepository } from "../repositories/item.repository";


export class ItemService extends AbstractService {
  protected repository = getCustomRepository(ItemRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}