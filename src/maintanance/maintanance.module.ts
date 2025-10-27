import { Module } from '@nestjs/common';
import { MaintananceService } from './maintanance.service';
import { MaintananceController } from './maintanance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maintanance } from './entities/maintanance.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([Maintanance]),
    ],
  controllers: [MaintananceController],
  providers: [MaintananceService],
})
export class MaintananceModule {}
