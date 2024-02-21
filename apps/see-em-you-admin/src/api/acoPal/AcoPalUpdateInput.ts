import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AcoPalUpdateInput = {
  aco?: boolean | null;
  pal?: boolean | null;
  application?: ApplicationWhereUniqueInput;
};
