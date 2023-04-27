import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInDto } from '../dto';
import { Public, User } from '../../../../common/decorators';
import { AuthPayload } from '../../../../common/interfaces';
import { AuthenticationUseCase } from '../authentication.useCase';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationUseCaseHandler: AuthenticationUseCase) {}

  @Public()
  @Post('sign-in')
  async signIn(@Body() signIn: SignInDto) {
    return await this.authenticationUseCaseHandler.signIn(signIn);
  }

  @Get('user-authenticated')
  async findUserAuth(@User() user: AuthPayload) {
    return await this.authenticationUseCaseHandler.userAuthenticated(user);
  }
}
