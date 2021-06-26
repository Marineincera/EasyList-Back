import { Child } from 'src/entities/child.entity';
import {EntityRepository, Repository} from 'typeorm';



@EntityRepository(Child)
export class ChildRepository extends Repository<Child> {

}