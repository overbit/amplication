import * as graphql from "@nestjs/graphql";
import { MhciPrereqsConversationCommentResolverBase } from "./base/mhciPrereqsConversationComment.resolver.base";
import { MhciPrereqsConversationComment } from "./base/MhciPrereqsConversationComment";
import { MhciPrereqsConversationCommentService } from "./mhciPrereqsConversationComment.service";

@graphql.Resolver(() => MhciPrereqsConversationComment)
export class MhciPrereqsConversationCommentResolver extends MhciPrereqsConversationCommentResolverBase {
  constructor(
    protected readonly service: MhciPrereqsConversationCommentService
  ) {
    super(service);
  }
}
