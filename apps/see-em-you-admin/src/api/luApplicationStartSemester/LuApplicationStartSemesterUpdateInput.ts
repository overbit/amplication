import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationStartSemesterUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  semester?: string | null;
  year?: string | null;
};
