import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationAppreqUpdateInput = {
  reqId?: number;
  completed?: boolean;
  application?: ApplicationWhereUniqueInput;
};
