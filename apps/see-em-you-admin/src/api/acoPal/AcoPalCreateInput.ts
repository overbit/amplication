import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AcoPalCreateInput = {
  aco?: boolean | null;
  pal?: boolean | null;
  application: ApplicationWhereUniqueInput;
};
