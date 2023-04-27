import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserRepository, UserModel } from '../domain';
import { UserEntity } from './user.entity';
import { encrypt } from '../domain/helpers';

@Injectable()
export class UserSqlRepository implements UserRepository {
  private userRepository: Repository<UserEntity>;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(UserEntity);
  }

  async findByEmail(email: string): Promise<UserModel> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async findAll(): Promise<UserModel[]> {
    return await this.userRepository.find();
  }

  async create(user: UserModel): Promise<UserModel> {
    const passwordHashed = await encrypt(user.password);
    user.password = passwordHashed;
    return await this.userRepository.save(user);
  }

  async update(user: UserModel): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }

  async findOneById(userId: string): Promise<UserModel> {
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  async delete(userId: string): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
}
