import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PromotionHistoryWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: StringFilter;
};
