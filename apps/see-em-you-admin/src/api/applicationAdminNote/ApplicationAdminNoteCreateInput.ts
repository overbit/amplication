import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationAdminNoteCreateInput = {
  note: string;
  application: ApplicationWhereUniqueInput;
  users: UserWhereUniqueInput;
};
