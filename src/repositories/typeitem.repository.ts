import { Typeitem } from '../entities/typeitem.entity';
import {EntityRepository, Repository} from 'typeorm';



@EntityRepository(Typeitem)
export class TypeitemRepository extends Repository<Typeitem> {

}