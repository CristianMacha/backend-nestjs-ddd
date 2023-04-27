import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [UserModule, UserRoleModule, RoleModule],
})
export class ModulesModule {}
