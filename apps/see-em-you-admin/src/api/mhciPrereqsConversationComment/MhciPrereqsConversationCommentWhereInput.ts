import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { MhciPrereqWhereUniqueInput } from "../mhciPrereq/MhciPrereqWhereUniqueInput";

export type MhciPrereqsConversationCommentWhereInput = {
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  mhciPrereqs?: MhciPrereqWhereUniqueInput;
};
