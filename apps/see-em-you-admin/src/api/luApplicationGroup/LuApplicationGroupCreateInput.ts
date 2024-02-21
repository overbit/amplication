import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationGroupCreateInput = {
  groupId: number;
  round: number;
  application: ApplicationWhereUniqueInput;
};
