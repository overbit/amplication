import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationAdminNoteUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  note?: string;
  users?: UserWhereUniqueInput;
};
