import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type PublicationCreateInput = {
  application: ApplicationWhereUniqueInput;
  author?: string | null;
  citation?: string | null;
  datafileId?: number | null;
  forum?: string | null;
  status?: string | null;
  title?: string | null;
  typeField?: string | null;
  typeOther?: string | null;
  url?: string | null;
};
