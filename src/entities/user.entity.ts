import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Child } from "./child.entity";
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
}