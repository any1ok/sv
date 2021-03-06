import {
  Table,
  Column,
  Model,
  Unique,
  Comment,
  DataType,
  Default,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @Comment('식별자')
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @Comment('이메일(아이디)')
  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @Comment('해싱된 패스워드')
  @AllowNull(false)
  @Column(DataType.TEXT)
  password: string;

  @Comment('아이디 고유값')
  @AllowNull(false)
  @Column(DataType.TEXT)
  user_id: string;

  @Comment('사용자 이름')
  @Column(DataType.STRING(100))
  name: string;

  @Comment('사용자 타입')
  @AllowNull(false)
  @Column
  userType: string;

  @Comment('사용자 상태. ')
  @AllowNull(false)
  @Default(0)
  @Column
  userStatus: bigint;
}
