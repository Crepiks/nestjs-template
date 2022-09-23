import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import {
  getAppConfig,
  AppEnvironment,
} from '../../src/common/config/app.config';
import { getDatabaseConfig } from '../../src/common/config/database.config';
import { UserDao } from '../../src/common/dao/user.dao';

dotenv.config();

const appConfig = getAppConfig();
const databaseConfig = getDatabaseConfig();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
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
