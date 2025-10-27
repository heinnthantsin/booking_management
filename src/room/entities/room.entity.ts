import { Booking } from "src/booking/entities/booking.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { ManyToOne, OneToMany } from "typeorm";

export class Room extends BaseEntity {
    

    
    @ManyToOne(() => Booking, (booking) => booking.rooms)
    bookings: Booking;
}
