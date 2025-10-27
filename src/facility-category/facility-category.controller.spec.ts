import { Test, TestingModule } from '@nestjs/testing';
import { FacilityCategoryController } from './facility-category.controller';
import { FacilityCategoryService } from './facility-category.service';

describe('FacilityCategoryController', () => {
  let controller: FacilityCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacilityCategoryController],
      providers: [FacilityCategoryService],
    }).compile();

    controller = module.get<FacilityCategoryController>(FacilityCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
