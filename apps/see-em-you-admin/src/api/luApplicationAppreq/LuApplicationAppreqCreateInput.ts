import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationAppreqCreateInput = {
  reqId: number;
  completed: boolean;
  application: ApplicationWhereUniqueInput;
};
