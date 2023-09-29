import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsConversationCommentService } from "./mhciPrereqsConversationComment.service";
import { MhciPrereqsConversationCommentControllerBase } from "./base/mhciPrereqsConversationComment.controller.base";

@swagger.ApiTags("mhciPrereqsConversationComments")
@common.Controller("mhciPrereqsConversationComments")
export class MhciPrereqsConversationCommentController extends MhciPrereqsConversationCommentControllerBase {
  constructor(
    protected readonly service: MhciPrereqsConversationCommentService
  ) {
    super(service);
  }
}
