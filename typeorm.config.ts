import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  port: parseInt(configService.get<string>('DB_PORT')),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  host: configService.get('DB_HOST'),
  entities: [__dirname + '/src/modules/**/infrastructure/**.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migrations/**{.ts,.js}'],
  migrationsTableName: 'db_migrations',
});
