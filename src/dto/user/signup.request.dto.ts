import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class SignupRequestDto {
  @ApiProperty({
    description: '이름(닉네임)',
    example: 'asdf',
    required: true,
  })
  name: string;
  @ApiProperty({
    description: '이메일',
    example: 'any1ok@naver.com',
    required: true,
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    description: '패스워드',
    example: 'q1234',
    required: true,
  })
  password: string;
}
