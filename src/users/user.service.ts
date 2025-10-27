import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  getUserById(id: string) {
    return this.userRepo.findById(id);
  }

  createUser(dto: any) {
    return this.userRepo.createUser(dto);
  }
}
