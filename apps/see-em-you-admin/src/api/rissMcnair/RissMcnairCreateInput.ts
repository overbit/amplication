import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RissMcnairCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  contact?: string | null;
  site?: string | null;
};
