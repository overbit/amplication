import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationStartSemesterCreateInput = {
  semester?: string | null;
  year?: string | null;
  application: ApplicationWhereUniqueInput;
};
