import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type SpecialConsiderationCreateInput = {
  reviewerId: number;
  specialConsideration: number;
  application: ApplicationWhereUniqueInput;
};
