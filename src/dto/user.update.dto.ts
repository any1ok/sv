import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Injectable()
export class UserUpdateDto {
  constructor(
    id: bigint,
    value: {
      name: string;
      email: string;
      password: string;
      userType: string;
    },
  ) {
    this.id = id;
    this.name = value.name;
    this.email = value.email;
    this.userType = value.userType;
    this.user_id = uuid();
    this.password = value.password
  }

  id: bigint;
  name: string;
  email: string;
  user_id: string;
  password: string;
  userType: string;
}
