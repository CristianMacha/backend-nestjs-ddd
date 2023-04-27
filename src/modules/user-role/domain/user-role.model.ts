import { RoleModel } from '../../role/domain';
import { UserModel } from '../../user/domain';

export interface UserRoleModel {
  id: string;
  active: boolean;
  deleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  user: UserModel;
  role: RoleModel;
}
