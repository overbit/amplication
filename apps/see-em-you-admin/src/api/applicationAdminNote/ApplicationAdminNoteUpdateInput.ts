import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationAdminNoteUpdateInput = {
  note?: string;
  application?: ApplicationWhereUniqueInput;
  users?: UserWhereUniqueInput;
};
