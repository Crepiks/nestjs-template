import dotenv from 'dotenv';

dotenv.config();

export enum AppEnvironment {
  Local = 'local',
  Development = 'development',
  Production = 'production',
}

interface AppConfig {
  environment: AppEnvironment;
  port: number;
}

export const getAppConfig = (): AppConfig => {
  return {
    environment:
      (process.env.APP_ENV as AppEnvironment) || AppEnvironment.Production,
    port: +process.env.APP_PORT || 3000,
  };
};
