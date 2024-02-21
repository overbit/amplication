import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type PublicationCreateInput = {
  title?: string | null;
  author?: string | null;
  forum?: string | null;
  citation?: string | null;
  url?: string | null;
  status?: string | null;
  typeField?: string | null;
  typeOther?: string | null;
  datafileId?: number | null;
  application: ApplicationWhereUniqueInput;
};
