import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";
import { List } from "./list.entity";


@Entity("typeitem")
export class Typeitem {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @Column({ type: "varchar", length: 205, nullable: false })
  icon?: string;

  @OneToMany(type => Item, item => item.typeitem, { onDelete: 'CASCADE' })
  items?: Item[];
}