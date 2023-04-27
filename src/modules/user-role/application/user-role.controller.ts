import { Body, Controller, Post } from '@nestjs/common';
import { UserRoleUseCase } from './user-role.useCase';
import { UserRoleCreateDto } from './dto';

@Controller('user-role')
export class UserRoleController {
  constructor(private userRoleUseCaseHandler: UserRoleUseCase) {}

  @Post()
  async create(@Body() userRoleCreate: UserRoleCreateDto) {
    return await this.userRoleUseCaseHandler.create(userRoleCreate);
  }
}
