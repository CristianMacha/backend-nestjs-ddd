import { Injectable } from '@nestjs/common';
import { UserRoleRepository, UserRoleModel } from '../domain';
import { DataSource, Repository } from 'typeorm';
import { UserRoleEntity } from './user-role.entity';

@Injectable()
export class UserRoleSqlRepository implements UserRoleRepository {
  private userRoleRepository: Repository<UserRoleEntity>;
  constructor(private dataSource: DataSource) {
    this.userRoleRepository = dataSource.getRepository(UserRoleEntity);
  }

  async create(userRole: UserRoleModel): Promise<UserRoleModel> {
    return await this.userRoleRepository.save(userRole);
  }
  update(userRole: UserRoleModel): Promise<UserRoleModel> {
    throw new Error('Method not implemented.');
  }
  byId(userRoleId: string): Promise<UserRoleModel> {
    throw new Error('Method not implemented.');
  }
  delete(userRoleId: string): Promise<UserRoleModel> {
    throw new Error('Method not implemented.');
  }
}
