import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Child } from "./child.entity";
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
    
  @ManyToOne(type => User, User => User.lists, { onDelete: 'CASCADE' })
  creator!: User;

  @ManyToOne(type => Child, Child => Child.lists, { onDelete: 'CASCADE' })
  childOwner?: Child;
}