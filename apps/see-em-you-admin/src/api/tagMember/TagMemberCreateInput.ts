import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type TagMemberCreateInput = {
  tagInstanceId?: number | null;
  application?: ApplicationWhereUniqueInput | null;
};
