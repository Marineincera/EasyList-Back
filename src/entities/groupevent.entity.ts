import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Groupdemand } from "./groupdemand.entity";
import { Typegroup } from "./typegroup.entity";
import { User } from "./user.entity";


@Entity("groupevent")
export class Groupevent {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @ManyToOne(type => Typegroup, typegroup => typegroup.groupevents, { onDelete: 'CASCADE' })
  typegroup!: Typegroup;

  @ManyToOne(type => User, user => user.groupeventsManaged, { onDelete: 'CASCADE' })
  admin!: User;

  @ManyToMany(type => User, user => user.groupeventsList)
  @JoinTable()
  members!: User[];

  @OneToMany(type => Groupdemand, groupdemand => groupdemand.groupevent, { onDelete: 'CASCADE' })
  groupdemands?: Groupdemand[];
}