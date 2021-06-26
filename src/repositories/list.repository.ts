import { List } from '../entities/list.entity';
import {EntityRepository, Repository} from 'typeorm';



@EntityRepository(List)
export class ListRepository extends Repository<List> {

}