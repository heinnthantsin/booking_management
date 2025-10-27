import { BaseEntity } from "src/common/entities/base.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Room } from "src/room/entities/room.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('building')
export class Building extends BaseEntity {
    @Column({type:"text"})
    name:string;

    @Column({type:"text"})
    address:string;

    @Column({type:"int",default:1})
    totalFloor:number

    @Column({type:'text', nullable:true})
    description:string

    @Column({type:'text'})
    email:string

    @Column()
    phone:string

    @Column({default:'available'})
    status:string

    @Column({type:'simple-array',nullable:true})
    imageUrl:string[]

    @Column({type:'int',nullable:true})
    star:number

    @OneToMany(()=>Room,(room)=>room.building)
    rooms: Room[];

    @ManyToOne(() => Profile, (profile) => profile.buildings)
    owner:Profile;
}
