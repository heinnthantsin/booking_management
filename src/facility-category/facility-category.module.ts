import { Module } from '@nestjs/common';
import { FacilityCategoryService } from './facility-category.service';
import { FacilityCategoryController } from './facility-category.controller';

@Module({
  controllers: [FacilityCategoryController],
  providers: [FacilityCategoryService],
})
export class FacilityCategoryModule {}
