import { UserModel } from './user.model';

export interface UserRepository {
  create(user: UserModel): Promise<UserModel | null>;
  update(user: UserModel): Promise<UserModel | null>;
  findOneById(userId: string): Promise<UserModel | null>;
  findAll(): Promise<UserModel[] | null>;
  delete(userId: string): Promise<UserModel | null>;
  findByEmail(email: string): Promise<UserModel | null>;
}
