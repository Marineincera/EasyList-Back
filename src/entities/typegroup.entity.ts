import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Groupevent } from "./groupevent.entity";


@Entity("typegroup")
export class Typegroup {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @Column({ type: "varchar", length: 205, nullable: false })
  icon!: string;

  @OneToMany(type => Groupevent, groupevent => groupevent.typegroup, { onDelete: 'CASCADE' })
  groupevents?: Groupevent[];

}