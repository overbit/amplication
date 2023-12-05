import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationAppreqUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  completed?: boolean;
  reqId?: number;
};
