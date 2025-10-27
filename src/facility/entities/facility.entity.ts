import { Booking } from "src/booking/entities/booking.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { FacilityCategory } from "src/facility-category/entities/facility-category.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";

@Entity('facility')
export class Facility extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(()=> FacilityCategory, (facilityCategory) => facilityCategory.facilities)
    category: FacilityCategory;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
    cost: number;

    @Column()
    remark: string;

    @ManyToMany(() => Booking, (booking) => booking.facilities)
    bookings: Booking[];
}
