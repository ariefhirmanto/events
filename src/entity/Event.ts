import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventTitle: string;

    @Column()
    eventDescription: string;

    @Column()
    eventDate: Date;
    
}