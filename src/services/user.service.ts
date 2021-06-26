import { AbstractService } from "../core/abstract.service";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/user.repository";


export class UserService extends AbstractService {
  protected repository = getCustomRepository(UserRepository);

  constructor() {
    super();
  }

  getAll() {
    return this.repository.find();
  }

}