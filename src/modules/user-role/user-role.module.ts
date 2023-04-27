import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleEntity, UserRoleSqlRepository } from './infrastructure';
import { UserRoleUseCase } from './application';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleEntity])],
  providers: [
    UserRoleSqlRepository,
    {
      provide: UserRoleUseCase,
      useFactory: (userRoleSqlRepository: UserRoleSqlRepository) =>
        new UserRoleUseCase(userRoleSqlRepository),
      inject: [UserRoleSqlRepository],
    },
  ],
})
export class UserRoleModule {}
