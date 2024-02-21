import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MhciPrereqsConversationCommentListRelationFilter } from "../mhciPrereqsConversationComment/MhciPrereqsConversationCommentListRelationFilter";
import { MhciPrereqsCourseListRelationFilter } from "../mhciPrereqsCourse/MhciPrereqsCourseListRelationFilter";
import { MhciPrereqsDesignPortfolioListRelationFilter } from "../mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolioListRelationFilter";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestListRelationFilter } from "../mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTestListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type LuUsersUsertypeWhereInput = {
  users?: UserWhereUniqueInput;
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentListRelationFilter;
  mhciPrereqsCourses?: MhciPrereqsCourseListRelationFilter;
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioListRelationFilter;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput;
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestListRelationFilter;
  id?: IntFilter;
};
