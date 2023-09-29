import { MhciPrereqsConversationCommentUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsConversationCommentUpdateManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsCourseUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsCourseUpdateManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsDesignPortfolioUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsDesignPortfolioUpdateManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestUpdateManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsProgrammingTestUpdateManyWithoutLuUsersUsertypesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LuUsersUsertypeUpdateInput = {
  domain?: number | null;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentUpdateManyWithoutLuUsersUsertypesInput;
  mhciPrereqsCourses?: MhciPrereqsCourseUpdateManyWithoutLuUsersUsertypesInput;
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioUpdateManyWithoutLuUsersUsertypesInput;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput | null;
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestUpdateManyWithoutLuUsersUsertypesInput;
  users?: UserWhereUniqueInput;
  usertypeId?: number;
};
