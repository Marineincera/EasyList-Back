import { Child } from '../entities/child.entity';
import {EntityRepository, Repository} from 'typeorm';



@EntityRepository(Child)
export class ChildRepository extends Repository<Child> {

}