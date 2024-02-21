import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type LuApplicationStartSemesterUpdateInput = {
  semester?: string | null;
  year?: string | null;
  application?: ApplicationWhereUniqueInput;
};
