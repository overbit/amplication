import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AcoPalUpdateInput = {
  aco?: boolean | null;
  application?: ApplicationWhereUniqueInput;
  pal?: boolean | null;
};
