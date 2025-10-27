import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Booking } from 'src/booking/entities/booking.entity';
import { Building } from 'src/building/entities/building.entity';
import { Profile } from 'src/profile/entities/profile.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  type: string;

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];

  @OneToMany(() => Building, (building) => building.owner)
  buildings: Building[];

  @OneToMany(() => Profile, (profile) => profile.userId)
  profiles: Profile[];
}
