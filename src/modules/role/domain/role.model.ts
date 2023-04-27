import { UserRoleModel } from '../../user-role/domain';

export interface RoleModel {
  id: string;
  name: string;
  active: boolean;
  deleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  userRoles: UserRoleModel[];
}
