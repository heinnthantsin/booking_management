// src/booking/entities/booking.entity.ts

import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne, 
  OneToOne, 
  JoinColumn, 
  CreateDateColumn, 
  OneToMany,
  ManyToMany
} from 'typeorm';

import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/users/user.entity';
import { Facility } from 'src/facility/entities/facility.entity';
import { Room } from 'src/room/entities/room.entity';

@Entity('booking') 
export class Booking extends BaseEntity {
    @ManyToOne(() => User, (user) => user.bookings)
    user: User;

    @OneToMany(()=> Room, (room)=> room.bookings)
    rooms: Room[];

    @Column({ type: 'date' })
    checkInDate: string

    @Column({ type: 'date' })
    checkOutDate: string

    @Column({ type: 'int' })
    numberOfGuests: number
    
    @Column({type : "string"})
    phoneNumber: number

    @Column({type:'datetime'})
    startTime : Date

    @Column({type:'datetime'})
    endTime : Date

    @Column({ type: 'varchar', length: 50 })
    status : string

    // @Column()
    // facility_id : string[]
    @ManyToMany(() => Facility, (facility) => facility.bookings)
    facilities: Facility[];

    @Column({ type: 'text', nullable: true })
    remarks : string
}