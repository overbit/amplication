import { MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput } from "./MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LuUsersUsertypeCreateInput = {
  domain?: number | null;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentCreateNestedManyWithoutLuUsersUsertypesInput;
  mhciPrereqsCourses?: MhciPrereqsCourseCreateNestedManyWithoutLuUsersUsertypesInput;
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioCreateNestedManyWithoutLuUsersUsertypesInput;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput | null;
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestCreateNestedManyWithoutLuUsersUsertypesInput;
  users: UserWhereUniqueInput;
  usertypeId: number;
};
