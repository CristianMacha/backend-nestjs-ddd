import { UserRoleModel } from '../../user-role/domain';

export interface UserModel {
  id: string;
  userUid: string;
  name: string;
  email: string;
  password: string;
  provider: string;
  verified: boolean;
  active: boolean;
  deleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  userRoles: UserRoleModel[];
}
