import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { List } from "./list.entity";


@Entity("typelist")
export class Typelist {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @Column({ type: "varchar", length: 205, nullable: false })
  icon?: string;

  @OneToMany(type => List, list => list.typelist, { onDelete: 'CASCADE' })
  lists?: List[];
}