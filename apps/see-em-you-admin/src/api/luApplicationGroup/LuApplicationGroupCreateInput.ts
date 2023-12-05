import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationGroupCreateInput = {
  application: ApplicationWhereUniqueInput;
  groupId: number;
  round: number;
};
