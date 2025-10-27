import { Facility } from "src/facility/entities/facility.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class FacilityCategory extends BaseEntity {
    @Column()
    name: string;
    
    @ManyToOne(()=> Profile, (profile)=> profile.facilities)
    profile: Profile;

    @OneToMany(() => Facility, (facility) => facility.category)
    facilities: Facility[];

    @Column({type:'text', nullable: true})
    remark: string
}
