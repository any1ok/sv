import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { databaseProviders } from 'src/provider/database.provider';
import { Mybatis } from 'src/provider/mybatis.provider';
import { UserService } from 'src/service/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    Mybatis,
    ...databaseProviders,
  ],
})
export class AppModule { }
