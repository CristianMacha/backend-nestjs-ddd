import { Injectable } from '@nestjs/common';
import { UserRoleRepository, UserRoleValue } from '../domain';
import { UserRoleCreateDto } from './dto';
import { UserValue } from '../../user/domain';
import { RoleValue } from '../../role/domain';

@Injectable()
export class UserRoleUseCase {
  constructor(private userRoleRepository: UserRoleRepository) {}

  public async create(userRoleCreate: UserRoleCreateDto) {
    const user = new UserValue();
    user.id = userRoleCreate.userId;

    const role = new RoleValue();
    role.id = userRoleCreate.roleId;

    const newUserRole = new UserRoleValue();
    newUserRole.user = user;
    newUserRole.role = role;
    newUserRole.createdBy = 'admin';
    newUserRole.updatedBy = 'admin';

    return await this.userRoleRepository.create(newUserRole);
  }
}
