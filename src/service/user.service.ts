import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/dto/user.create.dto';
import { User } from 'src/models/model.user';

@Injectable()
export class UserService {


  // 이메일이 중복되면 true,
  async checkEmailDuplicated(email: string) {
    const user = await User.findOne({ where: { email, userStatus: 0 } });
    return user !== null;
  }

  // 이메일로 사용자 탐색
  async findOneByEmail(email: string) {
    return await User.findOne({ where: { email, userStatus: 0 } });
  }

  // 식별자로 사용자 탐색
  async findOneById(id: bigint) {
    return await User.findOne({ where: { id, userStatus: 0 } });
  }

  // 사용자 삭제
  async deleteOneById(id: bigint) {
    return await User.update({ userStatus: id }, { where: { id: id } });
  }

  // 회원가입
  async signup(value: UserCreateDto) {
    const user = new User({ ...value });
    return await user.save();
  }
}
