import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import {
  getAppConfig,
  AppEnvironment,
} from '../../src/common/config/app.config';
import { UserDao } from '../../src/common/dao/user.dao';

dotenv.config();

const appConfig = getAppConfig();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserDao],
  extra:
    appConfig.environment !== AppEnvironment.Local
      ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : undefined,
  ssl: appConfig.environment !== AppEnvironment.Local,
  migrations: ['database/migrations/*{.ts,.js}'],
  synchronize: false,
});
