import { Injectable } from '@nestjs/common';
import { RoleCreateDto, RoleUpdateDto } from './dto';
import { RoleValue, RoleModel, RoleRepository } from '../domain';

@Injectable()
export class RoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  public async findAll(): Promise<RoleModel[]> {
    return await this.roleRepository.findAll();
  }

  /**
   * Roles by user
   * @param userId string
   * @returns RoleEntity[]
   */
  public async rolesByUserId(userId: string): Promise<RoleModel[]> {
    return this.roleRepository.rolesByUserId(userId);
  }

  /**
   * List basic role
   * @param roleId string
   * @returns RoleEntity
   */
  public async findOneById(roleId: string): Promise<RoleModel> {
    return await this.roleRepository.findOneById(roleId);
  }

  /**
   * Create role
   * @param roleCreate RoleCreateDto
   * @returns RoleModel
   */
  public async create(roleCreate: RoleCreateDto): Promise<RoleModel> {
    const { name } = roleCreate;
    const newRole = new RoleValue();
    newRole.name = name;
    newRole.createdBy = 'admin';
    newRole.updatedBy = 'admin';
    newRole.userRoles = [];
    return await this.roleRepository.create(newRole);
  }

  /**
   * Update role
   * @param roleUpdate RoleUpdateDto
   * @returns RoleModel
   */
  public async update(roleUpdate: RoleUpdateDto): Promise<RoleModel> {
    const { name, id } = roleUpdate;
    const role = new RoleValue();
    role.id = id;
    role.name = name;
    role.updatedBy = 'admin';
    role.updatedAt = new Date();
    return await this.roleRepository.update(role);
  }
}
