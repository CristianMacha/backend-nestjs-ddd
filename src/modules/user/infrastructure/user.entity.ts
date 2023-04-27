import { UserRoleEntity } from '../../user-role/infrastructure';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: true })
  userUid: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: false })
  provider: string;

  @Column({ nullable: false, default: true })
  verified: boolean;

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

  @OneToMany(() => UserRoleEntity, (userRole) => userRole.user, {
    nullable: false,
  })
  userRoles: UserRoleEntity[];
}
