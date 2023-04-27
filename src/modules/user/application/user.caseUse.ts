import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository, UserValue } from '../domain';
import { UserCreateDto } from './dto';

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(userCreate: UserCreateDto) {
    // Verify email
    const user = await this.userRepository.findByEmail(userCreate.email);
    if (user) {
      throw new ConflictException();
    }
    const newUser = new UserValue();
    newUser.name = userCreate.name;
    newUser.email = userCreate.email;
    newUser.verified = userCreate.verified;
    newUser.password = userCreate.password;
    newUser.provider = 'jwt';
    return await this.userRepository.create(newUser);
  }

  public async findOneById(userId: string) {
    return await this.userRepository.findOneById(userId);
  }

  public async findAll() {
    return await this.userRepository.findAll();
  }
}
