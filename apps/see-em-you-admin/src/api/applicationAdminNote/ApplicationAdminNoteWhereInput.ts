import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type ApplicationAdminNoteWhereInput = {
  application?: ApplicationWhereUniqueInput;
  users?: UserWhereUniqueInput;
  id?: IntFilter;
};
