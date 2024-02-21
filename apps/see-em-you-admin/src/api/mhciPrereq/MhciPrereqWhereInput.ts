import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { MhciPrereqsConversationCommentListRelationFilter } from "../mhciPrereqsConversationComment/MhciPrereqsConversationCommentListRelationFilter";
import { MhciPrereqsStatusWhereUniqueInput } from "../mhciPrereqsStatus/MhciPrereqsStatusWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MhciPrereqWhereInput = {
  application?: ApplicationWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentListRelationFilter;
  mhciPrereqsStatus?: MhciPrereqsStatusWhereUniqueInput;
  id?: IntFilter;
};
