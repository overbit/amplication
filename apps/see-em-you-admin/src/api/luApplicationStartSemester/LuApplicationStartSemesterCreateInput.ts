import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationStartSemesterCreateInput = {
  application: ApplicationWhereUniqueInput;
  semester?: string | null;
  year?: string | null;
};
