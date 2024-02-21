import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type SpecialConsiderationUpdateInput = {
  reviewerId?: number;
  specialConsideration?: number;
  application?: ApplicationWhereUniqueInput;
};
