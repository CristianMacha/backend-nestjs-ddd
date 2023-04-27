import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateDto } from '../dto';
import { UserUseCase } from '../user.caseUse';

@Controller('user')
export class UserController {
  constructor(private userUseCaseHandler: UserUseCase) {}

  @Get()
  async findAll() {
    return await this.userUseCaseHandler.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') userId: string) {
    return await this.userUseCaseHandler.findOneById(userId);
  }

  @Post()
  async create(@Body() userCreate: UserCreateDto) {
    return await this.userUseCaseHandler.create(userCreate);
  }
}
