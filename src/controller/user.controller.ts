import {
  Body,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { CheckEmailRequestDto } from 'src/dto/user/check_email.request.dto';
import { CheckEmailResponseDto } from 'src/dto/user/check_email.response.dto';
import { SignupRequestDto } from 'src/dto/user/signup.request.dto';
import { SignupResponseDto } from 'src/dto/user/signup.response.dto';
import { UserCreateDto } from 'src/dto/user.create.dto';
import { UserService } from 'src/service/user.service';

import {
  ApiOperation,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


@Controller('/user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('/signup')
  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({ status: 200, description: '성공', type: SignupResponseDto })
  async signup(@Body() body: SignupRequestDto): Promise<SignupResponseDto> {
    const emailDeplicated = await this.userService.checkEmailDuplicated(
      body?.email,
    );

    if (emailDeplicated) {
      return {
        success: false,
        emailDuplicated: true,
        message: '이메일 겹침',
        error: null,
      };
    } else {
      await this.userService.signup(
        new UserCreateDto({ ...body, userType: 'USER' }),
      );

      return {
        success: true,
        emailDuplicated: false,
        message: '성공',
        error: null,
      };
    }
  }

  @Get('/check-email-duplicated')
  @ApiOperation({ summary: '이메일 중복체크' })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: CheckEmailResponseDto,
  })
  @ApiQuery({
    name: 'email',
    description: '이메일 값',
    type: 'string',
    example: 'any1ok@naver.com',
    required: true,
  })
  async checkEmailDuplicated(
    @Query() query: CheckEmailRequestDto,
  ): Promise<CheckEmailResponseDto> {
    const emailDuplicated = await this.userService.checkEmailDuplicated(
      query?.email,
    );

    return {
      success: true,
      emailDuplicated,
      message: '',
      error: null,
    };
  }

}


