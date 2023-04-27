import { UserRoleModel } from '../../user-role/domain';
import { RoleModel } from './role.model';
import { v4 as uuid } from 'uuid';

export class RoleValue implements RoleModel {
  id: string;
  name: string;
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
