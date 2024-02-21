import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type TagMemberUpdateInput = {
  tagInstanceId?: number | null;
  application?: ApplicationWhereUniqueInput | null;
};
