import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Child } from "./child.entity";
import { Item } from "./item.entity";
import { Typelist } from "./typelist.entity";
import { User } from "./user.entity";

export enum StatusList {
    PUBLIC = "public",
    PRIVATE = "private"
}

@Entity("list")
export class List {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @Column({ type: "enum", enum: StatusList, default: StatusList.PUBLIC})
  statusList!: StatusList;
    
  @ManyToOne(type => User, user => user.lists, { onDelete: 'CASCADE' })
  creator!: User;

  @ManyToOne(type => Child, child => child.lists, { onDelete: 'CASCADE' })
  childOwner?: Child;

  @ManyToOne(type => Typelist, typelist => typelist.lists, { onDelete: 'CASCADE' })
  typelist!: Typelist;

  @ManyToMany(type => Item, item => item.lists)
  items!: Item[];
}