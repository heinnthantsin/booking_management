import { BaseEntity } from "src/common/entities/base.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, ManyToOne } from "typeorm";

export class Building extends BaseEntity {
    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    profileId: string;

    @ManyToOne(() => Profile, (profile) => profile.buildings)
    owner:Profile
}
