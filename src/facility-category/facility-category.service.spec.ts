import { Test, TestingModule } from '@nestjs/testing';
import { FacilityCategoryService } from './facility-category.service';

describe('FacilityCategoryService', () => {
  let service: FacilityCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacilityCategoryService],
    }).compile();

    service = module.get<FacilityCategoryService>(FacilityCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
