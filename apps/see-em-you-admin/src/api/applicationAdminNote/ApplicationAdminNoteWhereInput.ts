import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationAdminNoteWhereInput = {
  application?: ApplicationWhereUniqueInput;
  users?: UserWhereUniqueInput;
};
