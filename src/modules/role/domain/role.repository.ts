import { RoleModel } from './role.model';

export interface RoleRepository {
  create(role: RoleModel): Promise<RoleModel | null>;
  update(role: RoleModel): Promise<RoleModel | null>;
  findOneById(roleId: string): Promise<RoleModel | null>;
  delete(roleId: string): Promise<RoleModel | null>;
  findAll(): Promise<RoleModel[] | null>;
  rolesByUserId(userId: string): Promise<RoleModel[] | null>;
}
