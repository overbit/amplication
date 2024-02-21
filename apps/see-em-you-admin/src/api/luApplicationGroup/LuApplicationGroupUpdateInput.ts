import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationGroupUpdateInput = {
  groupId?: number;
  round?: number;
  application?: ApplicationWhereUniqueInput;
};
