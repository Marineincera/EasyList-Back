import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Groupevent } from "./groupevent.entity";
import { User } from "./user.entity";

export enum StatusGroupdemand {
    WAITING = "waiting",
    ACCEPTED = "accepted",
    DECLINED = "declined"
}

@Entity("groupdemand")
export class Groupdemand {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: Date, nullable: true })
  creationDate?: Date;

  @Column({ type: "enum", enum: StatusGroupdemand, default: StatusGroupdemand.WAITING})
  statusGroupdemand!: StatusGroupdemand;

  @ManyToOne(type => Groupevent, groupevent => groupevent.groupdemands, { onDelete: 'CASCADE' })
  groupevent!: Groupevent;

  @ManyToOne(type => User, user => user.groupdemands, { onDelete: 'CASCADE' })
  asker!: User;
  
}