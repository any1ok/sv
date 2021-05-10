import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

import { uuid } from 'uuidv4';

@Injectable()
export class CheckEmailRequestDto {
  @ApiProperty({
    description: '이메일',
    example: 'any3ok@naver.com',
    required: true,
  })
  @IsEmail()
  email: string;
}
