import { UserRoleModel } from '../../user-role/domain';
import { UserModel } from './user.model';
import { v4 as uuid } from 'uuid';

export class UserValue implements UserModel {
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

  constructor() {
    this.id = uuid();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
