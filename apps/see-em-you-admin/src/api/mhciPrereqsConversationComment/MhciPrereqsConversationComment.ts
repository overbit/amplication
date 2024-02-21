import { MhciPrereq } from "../mhciPrereq/MhciPrereq";
import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type MhciPrereqsConversationComment = {
  applicationId: number;
  comment: string;
  timestamp: Date;
  periodId: number | null;
  programId: number | null;
  mhciPrereqs?: MhciPrereq;
  luUsersUsertypes?: LuUsersUsertype;
  id: number;
};
