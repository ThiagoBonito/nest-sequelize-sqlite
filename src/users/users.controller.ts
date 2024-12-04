import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, CreateUserRoleDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.create(createUserDTO);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  @Get('roles')
  getUsers() {
    return this.usersService.getUsersWithRoles();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Body() updateUserDto: UpdateUserDTO) {
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('roles')
  createRole(@Body() createUserRoleDTO: CreateUserRoleDTO) {
    return this.usersService.createRole(createUserRoleDTO);
  }
}
