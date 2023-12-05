import { Module } from "@nestjs/common";
import { UsersInfoModuleBase } from "./base/usersInfo.module.base";
import { UsersInfoService } from "./usersInfo.service";
import { UsersInfoController } from "./usersInfo.controller";
import { UsersInfoResolver } from "./usersInfo.resolver";

@Module({
  imports: [UsersInfoModuleBase],
  controllers: [UsersInfoController],
  providers: [UsersInfoService, UsersInfoResolver],
  exports: [UsersInfoService],
})
export class UsersInfoModule {}
