import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RissMcnairCreateInput = {
  site?: string | null;
  contact?: string | null;
  application?: ApplicationWhereUniqueInput | null;
};
