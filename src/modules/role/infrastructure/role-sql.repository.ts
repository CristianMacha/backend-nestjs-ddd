import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { RoleEntity } from './role.entity';
import { RoleRepository, RoleModel } from '../domain';

@Injectable()
export class RoleSqlRepository implements RoleRepository {
  private roleRepository: Repository<RoleEntity>;

  constructor(private dataSource: DataSource) {
    this.roleRepository = this.dataSource.getRepository(RoleEntity);
  }

  async rolesByUserId(userId: string): Promise<RoleModel[]> {
    const query = this.roleRepository
      .createQueryBuilder('role')
      .innerJoin('role.userRoles', 'userRole')
      .innerJoin('userRole.user', 'user')
      .where('user.id=:userId', { userId });

    return await query.getMany();
  }

  async create(role: RoleModel): Promise<RoleModel> {
    return await this.roleRepository.save(role);
  }

  update(role: RoleModel): Promise<RoleModel> {
    throw new Error('Method not implemented.');
  }

  findOneById(roleId: string): Promise<RoleModel> {
    throw new Error('Method not implemented.');
  }

  delete(roleId: string): Promise<RoleModel> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<RoleModel[]> {
    return await this.roleRepository.find();
  }
}
