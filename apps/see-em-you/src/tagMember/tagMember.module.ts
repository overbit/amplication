import { Module } from "@nestjs/common";
import { TagMemberModuleBase } from "./base/tagMember.module.base";
import { TagMemberService } from "./tagMember.service";
import { TagMemberController } from "./tagMember.controller";
import { TagMemberResolver } from "./tagMember.resolver";

@Module({
  imports: [TagMemberModuleBase],
  controllers: [TagMemberController],
  providers: [TagMemberService, TagMemberResolver],
  exports: [TagMemberService],
})
export class TagMemberModule {}
