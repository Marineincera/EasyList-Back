import { Typelist } from '../entities/typelist.entity';
import {EntityRepository, Repository} from 'typeorm';



@EntityRepository(Typelist)
export class TypelistRepository extends Repository<Typelist> {

}