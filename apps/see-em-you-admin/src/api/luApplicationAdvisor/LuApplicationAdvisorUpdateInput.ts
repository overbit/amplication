import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationAdvisorUpdateInput = {
  advisorUserId?: number | null;
  advisorType?: number;
  name?: string | null;
  programId?: number | null;
  choice?: number | null;
  application?: ApplicationWhereUniqueInput;
};
