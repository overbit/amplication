import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type PublicationWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
