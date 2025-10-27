import { Booking } from "src/booking/entities/booking.entity";
import { Building } from "src/building/entities/building.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { Column, ManyToOne, OneToMany } from "typeorm";

export class Room extends BaseEntity {
        
    @Column({type: 'int',nullable: true})
    capacity: number;

    @Column({type: 'int',nullable: true})
    floor: number;

    @Column({type: 'varchar'})
    type: string;

    @Column({ default: 'available' })
    status: string;

    @Column({ unique: true })
    roomNumber: string;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
    pricePerHour: number;

    @Column({type: 'decimal',  precision: 10, scale: 2,nullable: true})
    pricePerNight: number;

    @Column({type:'text', nullable: true})
    rating: string

    @ManyToOne(()=>Building,(building)=>building.rooms)
    building : Building

    @ManyToOne(() => Booking, (booking) => booking.rooms)
    bookings: Booking;
}
