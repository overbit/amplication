import { GenderWhereUniqueInput } from "./GenderWhereUniqueInput";
import { GenderUpdateInput } from "./GenderUpdateInput";

export type UpdateGenderArgs = {
  where: GenderWhereUniqueInput;
  data: GenderUpdateInput;
};
