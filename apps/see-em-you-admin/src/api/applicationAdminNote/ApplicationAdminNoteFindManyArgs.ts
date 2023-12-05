import { ApplicationAdminNoteWhereInput } from "./ApplicationAdminNoteWhereInput";
import { ApplicationAdminNoteOrderByInput } from "./ApplicationAdminNoteOrderByInput";

export type ApplicationAdminNoteFindManyArgs = {
  where?: ApplicationAdminNoteWhereInput;
  orderBy?: Array<ApplicationAdminNoteOrderByInput>;
  skip?: number;
  take?: number;
};
