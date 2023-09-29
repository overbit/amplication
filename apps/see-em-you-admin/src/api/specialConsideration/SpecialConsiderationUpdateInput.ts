import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type SpecialConsiderationUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  reviewerId?: number;
  specialConsideration?: number;
};
