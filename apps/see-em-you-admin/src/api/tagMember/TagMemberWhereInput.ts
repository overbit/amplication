import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type TagMemberWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
