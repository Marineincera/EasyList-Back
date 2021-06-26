import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Child } from "./child.entity";
import { Groupdemand } from "./groupdemand.entity";
import { Groupevent } from "./groupevent.entity";
import { Item } from "./item.entity";
import { List } from "./list.entity";


@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  pseudo!: string;

  @Column({ type: "varchar", length: 205, nullable: false })
  email!: string;

  @Column({ type: "varchar", length: 205, nullable: false })
  password!: string;

  @Column({ type: Date, nullable: true })
  registrationDate?: Date;

  @Column({ type: "varchar", length: 505, nullable: true })
  avatar?: string;

  @OneToMany(type => List, list => list.creator, { onDelete: 'CASCADE' })
  lists?: List[];

  @OneToMany(type => Child, child => child.creator, { onDelete: 'CASCADE' })
  children?: Child[];

  @OneToMany(type => Item, item => item.owner, { onDelete: 'CASCADE' })
  items?: Item[];

  @OneToMany(type => Item, item => item.buyer, { onDelete: 'CASCADE' })
  basket?: Item[];

  @OneToMany(type => Groupevent, groupevent => groupevent.admin, { onDelete: 'CASCADE' })
  groupeventsManaged?: Groupevent[];

  @ManyToMany(type => Groupevent, groupevent => groupevent.members)
  groupeventsList?: Groupevent[];

  @OneToMany(type => Groupdemand, groupdemand => groupdemand.asker, { onDelete: 'CASCADE' })
  groupdemands?: Groupdemand[];
  
}