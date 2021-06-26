import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { List } from "./list.entity";
import { User } from "./user.entity";


@Entity("child")
export class Child {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  pseudo!: string;

  @Column({ type: Date, nullable: true })
  registrationDate?: Date;

  @Column({ type: "varchar", length: 505, nullable: true })
  avatar?: string;

  @OneToMany(type => List, list => list.childOwner, { onDelete: 'CASCADE' })
  lists?: List[];

  @ManyToOne(type => User, User => User.children, { onDelete: 'CASCADE' })
  creator!: User;

}