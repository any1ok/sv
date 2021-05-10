import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Injectable()
export class UserCreateDto {
  constructor(value: {
    name: string;
    email: string;
    password: string;
    userType: string;
  }) {
    this.name = value.name;
    this.email = value.email;
    this.userType = value.userType;
    this.user_id = uuid();
    this.password = value.password;
  }

  name: string;
  email: string;
  user_id: string;
  password: string;
  userType: string;
}
