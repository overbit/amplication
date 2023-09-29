import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationGroupUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  groupId?: number;
  round?: number;
};
