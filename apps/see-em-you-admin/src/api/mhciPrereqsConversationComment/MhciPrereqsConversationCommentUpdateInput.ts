import { MhciPrereqWhereUniqueInput } from "../mhciPrereq/MhciPrereqWhereUniqueInput";
import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";

export type MhciPrereqsConversationCommentUpdateInput = {
  applicationId?: number;
  comment?: string;
  periodId?: number | null;
  programId?: number | null;
  mhciPrereqs?: MhciPrereqWhereUniqueInput;
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
};
