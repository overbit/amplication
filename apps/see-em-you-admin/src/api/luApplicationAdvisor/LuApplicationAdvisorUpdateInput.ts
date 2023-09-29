import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationAdvisorUpdateInput = {
  advisorType?: number;
  advisorUserId?: number | null;
  application?: ApplicationWhereUniqueInput;
  choice?: number | null;
  name?: string | null;
  programId?: number | null;
};
