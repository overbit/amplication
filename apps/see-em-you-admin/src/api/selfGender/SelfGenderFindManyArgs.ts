import { SelfGenderWhereInput } from "./SelfGenderWhereInput";
import { SelfGenderOrderByInput } from "./SelfGenderOrderByInput";

export type SelfGenderFindManyArgs = {
  where?: SelfGenderWhereInput;
  orderBy?: Array<SelfGenderOrderByInput>;
  skip?: number;
  take?: number;
};
