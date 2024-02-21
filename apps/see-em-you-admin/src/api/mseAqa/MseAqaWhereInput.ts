import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MseAqaWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
