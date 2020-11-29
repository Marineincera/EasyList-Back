import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("typegroup")
export class Typegroup {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @Column({ type: "varchar", length: 205, nullable: false })
  icon!: string;

}