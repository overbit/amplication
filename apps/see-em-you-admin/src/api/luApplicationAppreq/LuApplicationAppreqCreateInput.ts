import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationAppreqCreateInput = {
  application: ApplicationWhereUniqueInput;
  completed: boolean;
  reqId: number;
};
