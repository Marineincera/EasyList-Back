import {EntityRepository, Repository} from 'typeorm';
import { Typegroup } from './../entities/typegroup.entity';


@EntityRepository(Typegroup)
export class TypegroupRepository extends Repository<Typegroup> {

}