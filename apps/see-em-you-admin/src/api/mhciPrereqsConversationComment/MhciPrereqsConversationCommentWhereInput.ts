import { MhciPrereqWhereUniqueInput } from "../mhciPrereq/MhciPrereqWhereUniqueInput";
import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MhciPrereqsConversationCommentWhereInput = {
  mhciPrereqs?: MhciPrereqWhereUniqueInput;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  id?: IntFilter;
};
