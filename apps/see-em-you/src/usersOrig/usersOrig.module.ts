import { Module } from "@nestjs/common";
import { UsersOrigModuleBase } from "./base/usersOrig.module.base";
import { UsersOrigService } from "./usersOrig.service";
import { UsersOrigController } from "./usersOrig.controller";
import { UsersOrigResolver } from "./usersOrig.resolver";

@Module({
  imports: [UsersOrigModuleBase],
  controllers: [UsersOrigController],
  providers: [UsersOrigService, UsersOrigResolver],
  exports: [UsersOrigService],
})
export class UsersOrigModule {}
