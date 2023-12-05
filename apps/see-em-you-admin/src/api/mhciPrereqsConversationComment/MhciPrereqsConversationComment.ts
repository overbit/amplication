import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";
import { MhciPrereq } from "../mhciPrereq/MhciPrereq";

export type MhciPrereqsConversationComment = {
  applicationId: number;
  comment: string;
  id: number;
  luUsersUsertypes?: LuUsersUsertype;
  mhciPrereqs?: MhciPrereq;
  periodId: number | null;
  programId: number | null;
  timestamp: Date;
};
