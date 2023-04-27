import * as path from 'path';
import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const dbOptions: TypeOrmModuleOptions = {
      type: 'mysql',
      port: parseInt(config.get<string>('DB_PORT')),
      username: config.get('DB_USERNAME'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_DATABASE'),
      host: config.get('DB_HOST'),
      entities: [
        path.join(
          __dirname,
          '..',
          '/modules/**/infrastructure/*.entity{.ts,.js}',
        ),
      ],
      migrations: [path.join(__dirname, '..', '/migrations/*{.ts,.js}')],
      migrationsTableName: 'db_migrations',
      synchronize: false,
    };
    return dbOptions;
  },
});
