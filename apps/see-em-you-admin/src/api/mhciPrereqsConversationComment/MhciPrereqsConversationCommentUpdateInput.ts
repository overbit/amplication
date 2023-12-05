import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { MhciPrereqWhereUniqueInput } from "../mhciPrereq/MhciPrereqWhereUniqueInput";

export type MhciPrereqsConversationCommentUpdateInput = {
  applicationId?: number;
  comment?: string;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  mhciPrereqs?: MhciPrereqWhereUniqueInput;
  periodId?: number | null;
  programId?: number | null;
};
