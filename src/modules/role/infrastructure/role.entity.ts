import { UserRoleEntity } from '../../user-role/infrastructure';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity {
  @PrimaryColumn({ nullable: false })
  id: string;

  @Column({ nullable: false, unique: true })
  name: string;

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

  @OneToMany(() => UserRoleEntity, (userRole) => userRole.role)
  userRoles: UserRoleEntity[];
}
