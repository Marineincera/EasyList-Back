import { Groupdemand } from '../entities/groupdemand.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Groupdemand)
export class GroupdemandRepository extends Repository<Groupdemand> {
}