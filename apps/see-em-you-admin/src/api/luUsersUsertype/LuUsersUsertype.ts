import { MhciPrereqsConversationComment } from "../mhciPrereqsConversationComment/MhciPrereqsConversationComment";
import { MhciPrereqsCourse } from "../mhciPrereqsCourse/MhciPrereqsCourse";
import { MhciPrereqsDesignPortfolio } from "../mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolio";
import { MhciPrereqsProgrammingSample } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSample";
import { MhciPrereqsProgrammingTest } from "../mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTest";
import { User } from "../user/User";

export type LuUsersUsertype = {
  domain: number | null;
  id: number;
  mhciPrereqsConversationComments?: Array<MhciPrereqsConversationComment>;
  mhciPrereqsCourses?: Array<MhciPrereqsCourse>;
  mhciPrereqsDesignPortfolios?: Array<MhciPrereqsDesignPortfolio>;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSample | null;
  mhciPrereqsProgrammingTests?: Array<MhciPrereqsProgrammingTest>;
  users?: User;
  usertypeId: number;
};
