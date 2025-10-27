// src/users/users.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  createUser(user: Partial<User>) {
    const entity = this.repo.create(user);
    return this.repo.save(entity);
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }
}
