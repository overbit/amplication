import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RissMcnairUpdateInput = {
  site?: string | null;
  contact?: string | null;
  application?: ApplicationWhereUniqueInput | null;
};
