import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: any) {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    // Implementation for updating user goes here
    return { message: `User with id ${id} updated.` };
  }
}
