import { Module } from "@nestjs/common";
import { UsersRemoteAuthStringModuleBase } from "./base/usersRemoteAuthString.module.base";
import { UsersRemoteAuthStringService } from "./usersRemoteAuthString.service";
import { UsersRemoteAuthStringController } from "./usersRemoteAuthString.controller";
import { UsersRemoteAuthStringResolver } from "./usersRemoteAuthString.resolver";

@Module({
  imports: [UsersRemoteAuthStringModuleBase],
  controllers: [UsersRemoteAuthStringController],
  providers: [UsersRemoteAuthStringService, UsersRemoteAuthStringResolver],
  exports: [UsersRemoteAuthStringService],
})
export class UsersRemoteAuthStringModule {}
