import { Repository } from 'typeorm';
import { UserDao } from 'src/common/dao/user.dao';

export const seedUsers = async (usersRepository: Repository<UserDao>) => {
  await usersRepository.insert([
    {
      id: '153ae8ec-f266-441f-8a00-93b5f142f93b',
    },
  ]);
};
