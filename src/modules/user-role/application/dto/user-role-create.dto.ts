import { IsNotEmpty, IsUUID } from 'class-validator';

export class UserRoleCreateDto {
  @IsUUID('4')
  @IsNotEmpty()
  roleId: string;

  @IsUUID('4')
  @IsNotEmpty()
  userId: string;
}
