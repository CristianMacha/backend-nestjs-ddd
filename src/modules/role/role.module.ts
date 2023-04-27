import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity, RoleSqlRepository } from './infrastructure';
import { RoleUseCase } from './application';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [
    RoleSqlRepository,
    {
      provide: RoleUseCase,
      useFactory: (roleSqlRepository: RoleSqlRepository) =>
        new RoleUseCase(roleSqlRepository),
      inject: [RoleSqlRepository],
    },
  ],
})
export class RoleModule {}
