import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MhciPrereqsConversationCommentUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsConversationCommentUpdateManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsCourseUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsCourseUpdateManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsDesignPortfolioUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsDesignPortfolioUpdateManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsProgrammingTestUpdateManyWithoutLuUsersUsertypesInput";

export type LuUsersUsertypeUpdateInput = {
  usertypeId?: number;
  domain?: number | null;
  users?: UserWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentUpdateManyWithoutLuUsersUsertypesInput;
  mhciPrereqsCourses?: MhciPrereqsCourseUpdateManyWithoutLuUsersUsertypesInput;
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioUpdateManyWithoutLuUsersUsertypesInput;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput | null;
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestUpdateManyWithoutLuUsersUsertypesInput;
};
