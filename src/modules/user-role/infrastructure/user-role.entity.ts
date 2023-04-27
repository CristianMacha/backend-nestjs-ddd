import { RoleEntity } from '../../role/infrastructure';
import { UserEntity } from '../../user/infrastructure';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_role' })
export class UserRoleEntity {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: false, default: true })
  active: boolean;

  @Column({ default: false })
  deleted: boolean;

  @Column({ nullable: false })
  createdBy: string;

  @Column({ nullable: false })
  updatedBy: string;

  @Column({ nullable: false })
  createdAt: Date;

  @Column({ nullable: false })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.userRoles, { nullable: false })
  user: UserEntity;

  @ManyToOne(() => RoleEntity, (role) => role.userRoles, { nullable: false })
  role: RoleEntity;
}
