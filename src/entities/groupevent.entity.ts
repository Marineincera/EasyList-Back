import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Typegroup } from "./typegroup.entity";


@Entity("groupevent")
export class Groupevent {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 205, nullable: false })
  name!: string;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @ManyToOne(type => Typegroup, typegroup => typegroup.groupevents, { onDelete: 'CASCADE' })
  typegroup!: Typegroup;

}