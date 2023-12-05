import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type TagMemberUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  tagInstanceId?: number | null;
};
