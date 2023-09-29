import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RissMcnairUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  contact?: string | null;
  site?: string | null;
};
