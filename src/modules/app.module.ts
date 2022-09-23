import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppEnvironment, getAppConfig } from 'src/common/config/app.config';
import { getDatabaseConfig } from 'src/common/config/database.config';
import { UserDao } from 'src/common/dao/user.dao';
import { HealthModule } from './health/health.module';

const appConfig = getAppConfig();
const databaseConfig = getDatabaseConfig();

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
      synchronize: false,
    }),
    HealthModule,
  ],
})
export class AppModule {}
