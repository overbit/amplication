import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput";

export type LuUsersUsertypeCreateInput = {
  usertypeId: number;
  domain?: number | null;
  users: UserWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput;
  mhciPrereqsCourses?: MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput;
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput | null;
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput;
};
