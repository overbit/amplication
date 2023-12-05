import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type SpecialConsiderationCreateInput = {
  application: ApplicationWhereUniqueInput;
  reviewerId: number;
  specialConsideration: number;
};
