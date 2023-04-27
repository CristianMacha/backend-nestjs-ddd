import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { RoleCreateDto } from './role-create.dto';

export class RoleUpdateDto extends PartialType(RoleCreateDto) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
