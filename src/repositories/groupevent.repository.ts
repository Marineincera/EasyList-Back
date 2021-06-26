import { Groupevent } from '../entities/groupevent.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Groupevent)
export class GroupeventRepository extends Repository<Groupevent> {
}