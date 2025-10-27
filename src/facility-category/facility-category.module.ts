import { Module } from '@nestjs/common';
import { FacilityCategoryService } from './facility-category.service';
import { FacilityCategoryController } from './facility-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacilityCategory } from './entities/facility-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FacilityCategory]),
  ],
  controllers: [FacilityCategoryController],
  providers: [FacilityCategoryService],
})
export class FacilityCategoryModule {}
