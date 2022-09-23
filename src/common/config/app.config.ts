import dotenv from 'dotenv';

dotenv.config();

export enum AppEnvironment {
  Local = 'local',
  Development = 'development',
  Production = 'production',
}

interface AppConfig {
  environment: AppEnvironment;
}

export const getAppConfig = (): AppConfig => {
  return {
    environment:
      (process.env.APP_ENV as AppEnvironment) || AppEnvironment.Production,
  };
};
