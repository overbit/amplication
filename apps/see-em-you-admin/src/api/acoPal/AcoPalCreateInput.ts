import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AcoPalCreateInput = {
  aco?: boolean | null;
  application: ApplicationWhereUniqueInput;
  pal?: boolean | null;
};
