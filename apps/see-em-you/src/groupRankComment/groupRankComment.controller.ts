import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupRankCommentService } from "./groupRankComment.service";
import { GroupRankCommentControllerBase } from "./base/groupRankComment.controller.base";

@swagger.ApiTags("groupRankComments")
@common.Controller("groupRankComments")
export class GroupRankCommentController extends GroupRankCommentControllerBase {
  constructor(protected readonly service: GroupRankCommentService) {
    super(service);
  }
}
