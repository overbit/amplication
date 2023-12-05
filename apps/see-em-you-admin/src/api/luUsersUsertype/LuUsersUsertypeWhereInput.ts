import { MhciPrereqsConversationCommentListRelationFilter } from "../mhciPrereqsConversationComment/MhciPrereqsConversationCommentListRelationFilter";
import { MhciPrereqsCourseListRelationFilter } from "../mhciPrereqsCourse/MhciPrereqsCourseListRelationFilter";
import { MhciPrereqsDesignPortfolioListRelationFilter } from "../mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolioListRelationFilter";
import { MhciPrereqsProgrammingSampleWhereUniqueInput } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleWhereUniqueInput";
import { MhciPrereqsProgrammingTestListRelationFilter } from "../mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTestListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LuUsersUsertypeWhereInput = {
  mhciPrereqsConversationComments?: MhciPrereqsConversationCommentListRelationFilter;
  mhciPrereqsCourses?: MhciPrereqsCourseListRelationFilter;
  mhciPrereqsDesignPortfolios?: MhciPrereqsDesignPortfolioListRelationFilter;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSampleWhereUniqueInput;
  mhciPrereqsProgrammingTests?: MhciPrereqsProgrammingTestListRelationFilter;
  users?: UserWhereUniqueInput;
};
