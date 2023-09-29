import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DecisionRankMemberService } from "./decisionRankMember.service";
import { DecisionRankMemberControllerBase } from "./base/decisionRankMember.controller.base";

@swagger.ApiTags("decisionRankMembers")
@common.Controller("decisionRankMembers")
export class DecisionRankMemberController extends DecisionRankMemberControllerBase {
  constructor(protected readonly service: DecisionRankMemberService) {
    super(service);
  }
}
