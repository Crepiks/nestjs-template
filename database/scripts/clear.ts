/* eslint-disable no-console */
import { AppDataSource } from '../config/data-source';

const clear = async () => {
  try {
    await AppDataSource.initialize();
  } catch {
    console.log('Fatal Error: Failed to initialize data source');
    process.exit(1);
  }

  try {
    await AppDataSource.dropDatabase();
  } catch {
    console.log('Fatal Error: Failed to clear data sources');
    process.exit(1);
  }

  console.log('Database successfully cleared');

  process.exit();
};

clear();
