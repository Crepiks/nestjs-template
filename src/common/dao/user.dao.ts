import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserDao {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'now()' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: 'now()' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: string | null;
}
