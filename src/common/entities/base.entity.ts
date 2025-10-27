import { User } from 'src/users/user.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity as TypeOrmBase,
  ManyToOne,
} from 'typeorm';

export abstract class BaseEntity extends TypeOrmBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({nullable: true })
  updatedAt?: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  createdBy?: User;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  updatedBy?: User;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  deletedBy?: User;
}
