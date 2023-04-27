import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { UserSqlRepository, UserEntity } from './infrastructure';
import {
  AuthenticationController,
  UserController,
} from './application/controllers';
import { JwtAuthGuard, JwtStrategy } from '../../common/passport';
import { AuthenticationUseCase, UserUseCase } from './application';

@Module({
  controllers: [UserController, AuthenticationController],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '3h' },
      }),
    }),
  ],
  providers: [
    UserSqlRepository,
    JwtStrategy,
    {
      provide: UserUseCase,
      useFactory: (userSqlRepository: UserSqlRepository) =>
        new UserUseCase(userSqlRepository),
      inject: [UserSqlRepository],
    },
    {
      provide: AuthenticationUseCase,
      useFactory: (userSqlRepository: UserSqlRepository, jwt: JwtService) =>
        new AuthenticationUseCase(userSqlRepository, jwt),
      inject: [UserSqlRepository, JwtService],
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class UserModule {}
