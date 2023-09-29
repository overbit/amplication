import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type TagMemberCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  tagInstanceId?: number | null;
};
