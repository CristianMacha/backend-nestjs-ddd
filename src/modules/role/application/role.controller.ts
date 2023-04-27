import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleUseCase } from './role.useCase';
import { RoleCreateDto } from './dto';

@Controller('role')
export class RoleController {
  constructor(private roleUseCaseHandler: RoleUseCase) {}

  @Get()
  async findAll() {
    return await this.roleUseCaseHandler.findAll();
  }

  @Post()
  async create(@Body() roleCreate: RoleCreateDto) {
    return await this.roleUseCaseHandler.create(roleCreate);
  }

  @Get('user/:userId')
  async rolesByUser(@Param('userId') userId: string) {
    return await this.roleUseCaseHandler.rolesByUserId(userId);
  }
}
