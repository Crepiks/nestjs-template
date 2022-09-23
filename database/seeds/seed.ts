import { AppDataSource } from '../config/data-source';

const seed = async () => {
  try {
    await AppDataSource.initialize();
  } catch {
    console.log('Fatal Error: Failed to initialize database');
    process.exit(1);
  }
  console.log('Database initialized');

  process.exit();
};

seed();
