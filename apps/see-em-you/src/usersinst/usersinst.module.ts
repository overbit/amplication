import { Module } from "@nestjs/common";
import { UsersinstModuleBase } from "./base/usersinst.module.base";
import { UsersinstService } from "./usersinst.service";
import { UsersinstController } from "./usersinst.controller";
import { UsersinstResolver } from "./usersinst.resolver";

@Module({
  imports: [UsersinstModuleBase],
  controllers: [UsersinstController],
  providers: [UsersinstService, UsersinstResolver],
  exports: [UsersinstService],
})
export class UsersinstModule {}
