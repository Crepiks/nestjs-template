import { AppDataSource } from '../config/data-source';
import { UserDao } from '../../src/common/dao/user.dao';
import { seedUsers } from './users.seed';

const seed = async () => {
  try {
    await AppDataSource.initialize();
  } catch {
    console.log('Fatal Error: Failed to initialize database');
    process.exit(1);
  }
  console.log('Database initialized');

  try {
    const usersRepository = AppDataSource.getRepository(UserDao);
    await seedUsers(usersRepository);
    console.log('Users seeded');
  } catch (e) {
    console.log(e);
    console.log('Fatal Error: Failed to seed users');
    process.exit(1);
  }

  process.exit();
};

seed();
