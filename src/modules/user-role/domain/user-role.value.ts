import { RoleModel } from '../../role/domain';
import { UserModel } from '../../user/domain';
import { UserRoleModel } from './user-role.model';
import { v4 as uuid } from 'uuid';

export class UserRoleValue implements UserRoleModel {
  id: string;
  active: boolean;
  deleted: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  user: UserModel;
  role: RoleModel;

  constructor() {
    this.id = uuid();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
