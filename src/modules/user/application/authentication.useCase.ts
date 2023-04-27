import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../domain';
import { SignInDto } from './dto';
import { compare } from '../domain/helpers';
import { AuthPayload } from '../../../common/interfaces';

@Injectable()
export class AuthenticationUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private jwt: JwtService,
  ) {}

  public async signIn(signIn: SignInDto) {
    const { email, password } = signIn;
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new UnauthorizedException();
    }

    const payload: AuthPayload = { username: user.name, sub: user.id };

    return { access_token: await this.jwt.signAsync(payload) };
  }

  public async userAuthenticated(user: AuthPayload) {
    return await this.userRepository.findOneById(user.sub);
  }
}
