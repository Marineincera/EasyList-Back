import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Child } from "./child.entity";
import { List } from "./list.entity";
import { Typelist } from "./typelist.entity";
import { User } from "./user.entity";

export enum LevelItem {
    LEVEL_ONE = "levelOne",
    LEVEL_TWO = "levelTwo",
    LEVEL_THREE = "levelThree",
    LEVEL_UNDEFINED = "levelUndefined"
}

export enum ItemStatus {
    ITEM_WAITING = "itemWaiting",
    ITEM_OFFERED = "itemOffered"
}

@Entity("item")
export class Item {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @Column({ type: "varchar", length: 505, nullable: true })
  picture?: string;

  @Column({ type: "varchar", length: 505, nullable: true })
  link?: string;

  @Column({ type: "enum", enum: LevelItem, default: LevelItem.LEVEL_UNDEFINED})
  levelItem!: LevelItem;

  @Column({ type: "varchar", length: 505, nullable: true })
  indications?: string;

  @Column({ type: "enum", enum: ItemStatus, default: ItemStatus.ITEM_WAITING})
  itemStatus!:ItemStatus;
  
  @ManyToMany(type => List, list => list.items)
  @JoinTable()
  lists!: List[];

  @ManyToOne(type => User, user => user.items, { onDelete: 'CASCADE' })
  owner!: User;

  @ManyToOne(type => User, user => user.basket, { onDelete: 'CASCADE' })
  buyer!: User;

  
}