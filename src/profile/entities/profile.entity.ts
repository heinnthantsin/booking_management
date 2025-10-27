import { Building } from "src/building/entities/building.entity";
import { FacilityCategory } from "src/facility-category/entities/facility-category.entity";
import { User } from "src/users/user.entity";
import { BaseEntity, Column, ManyToOne, OneToMany } from "typeorm";

export class Profile extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(()=> User, (user) => user.profiles)
    userId: User;

    @Column()
    description: string;


    @OneToMany(() => Building, (building) => building.owner)
    buildings: Building[];  

    @OneToMany(() => FacilityCategory, (facilityCategory) => facilityCategory.profile)
    facilities: FacilityCategory[];
}
