import { Building } from "src/building/entities/building.entity";
import { BaseEntity } from "src/common/entities/base.entity";
import { FacilityCategory } from "src/facility-category/entities/facility-category.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";


@Entity('profile')
export class Profile extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(()=> User, (user) => user.profiles)
    user: User;

    @Column()
    description: string;

    @OneToMany(() => Building, (building) => building.owner)
    buildings: Building[];  

    @OneToMany(() => FacilityCategory, (facilityCategory) => facilityCategory.profile)
    facilities: FacilityCategory[];
}
