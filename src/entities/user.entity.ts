import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
  avatar!: string;

}