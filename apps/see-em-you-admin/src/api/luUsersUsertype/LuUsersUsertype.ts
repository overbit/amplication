import { User } from "../user/User";
import { MhciPrereqsConversationComment } from "../mhciPrereqsConversationComment/MhciPrereqsConversationComment";
import { MhciPrereqsCourse } from "../mhciPrereqsCourse/MhciPrereqsCourse";
import { MhciPrereqsDesignPortfolio } from "../mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolio";
import { MhciPrereqsProgrammingSample } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSample";
import { MhciPrereqsProgrammingTest } from "../mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTest";

export type LuUsersUsertype = {
  usertypeId: number;
  domain: number | null;
  users?: User;
  mhciPrereqsConversationComments?: Array<MhciPrereqsConversationComment>;
  mhciPrereqsCourses?: Array<MhciPrereqsCourse>;
  mhciPrereqsDesignPortfolios?: Array<MhciPrereqsDesignPortfolio>;
  mhciPrereqsProgrammingSamples?: MhciPrereqsProgrammingSample | null;
  mhciPrereqsProgrammingTests?: Array<MhciPrereqsProgrammingTest>;
  id: number;
};
