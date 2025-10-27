// src/seed/seed.service.ts
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from 'src/users/user.entity';
import { DEFAULT_SYSTEM_USER_EMAIL, DEFAULT_SYSTEM_USER_ID, DEFAULT_SYSTEM_USER_NAME, DEFAULT_SYSTEM_USER_PASSWORD } from '../constant';

@Injectable()
export class AdminSeeder implements OnApplicationBootstrap {
  constructor(private readonly dataSource: DataSource) {}

  async onApplicationBootstrap() {
    const repo = this.dataSource.getRepository(User);
    const exists = await repo.findOne({ where: { id: DEFAULT_SYSTEM_USER_ID } });
    if (!exists) {
      const systemUser = repo.create({
        id: DEFAULT_SYSTEM_USER_ID,
        name: DEFAULT_SYSTEM_USER_NAME,
        email: DEFAULT_SYSTEM_USER_EMAIL,
        password: DEFAULT_SYSTEM_USER_PASSWORD, 
      });
      await repo.save(systemUser);
      console.log('*********System user created**********');
    }
  }
}
