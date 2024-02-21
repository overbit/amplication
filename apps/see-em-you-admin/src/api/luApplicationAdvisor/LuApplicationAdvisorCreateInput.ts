import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationAdvisorCreateInput = {
  advisorUserId?: number | null;
  advisorType: number;
  name?: string | null;
  programId?: number | null;
  choice?: number | null;
  application: ApplicationWhereUniqueInput;
};
