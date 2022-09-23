import { AppEnvironment, getAppConfig } from './app.config';

describe('getAppConfig', () => {
  const env = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = { ...env };
  });

  it('should have environment propery', async () => {
    const appConfig = getAppConfig();

    expect(appConfig).toHaveProperty('environment');
  });

  it('should set production environment as default', async () => {
    process.env.APP_ENV = undefined;
    const appConfig = getAppConfig();

    expect(appConfig.environment).toEqual(AppEnvironment.Production);
  });
});
