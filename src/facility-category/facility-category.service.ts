import { Injectable } from '@nestjs/common';
import { CreateFacilityCategoryDto } from './dto/create-facility-category.dto';
import { UpdateFacilityCategoryDto } from './dto/update-facility-category.dto';

@Injectable()
export class FacilityCategoryService {
  create(createFacilityCategoryDto: CreateFacilityCategoryDto) {
    return 'This action adds a new facilityCategory';
  }

  findAll() {
    return `This action returns all facilityCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facilityCategory`;
  }

  update(id: number, updateFacilityCategoryDto: UpdateFacilityCategoryDto) {
    return `This action updates a #${id} facilityCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} facilityCategory`;
  }
}
