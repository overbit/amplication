import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagMemberService } from "./tagMember.service";
import { TagMemberControllerBase } from "./base/tagMember.controller.base";

@swagger.ApiTags("tagMembers")
@common.Controller("tagMembers")
export class TagMemberController extends TagMemberControllerBase {
  constructor(protected readonly service: TagMemberService) {
    super(service);
  }
}
