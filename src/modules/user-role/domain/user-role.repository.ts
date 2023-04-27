import { UserRoleModel } from './user-role.model';

export interface UserRoleRepository {
  create(userRole: UserRoleModel): Promise<UserRoleModel | null>;
  update(userRole: UserRoleModel): Promise<UserRoleModel | null>;
  byId(userRoleId: string): Promise<UserRoleModel | null>;
  delete(userRoleId: string): Promise<UserRoleModel | null>;
}
