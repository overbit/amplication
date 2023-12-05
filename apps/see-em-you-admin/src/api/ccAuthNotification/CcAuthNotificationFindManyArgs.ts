import { CcAuthNotificationWhereInput } from "./CcAuthNotificationWhereInput";
import { CcAuthNotificationOrderByInput } from "./CcAuthNotificationOrderByInput";

export type CcAuthNotificationFindManyArgs = {
  where?: CcAuthNotificationWhereInput;
  orderBy?: Array<CcAuthNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
