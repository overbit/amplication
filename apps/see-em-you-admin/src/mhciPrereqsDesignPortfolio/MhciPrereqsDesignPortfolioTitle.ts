import { MhciPrereqsDesignPortfolio as TMhciPrereqsDesignPortfolio } from "../api/mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolio";

export const MHCIPREREQSDESIGNPORTFOLIO_TITLE_FIELD = "url";

export const MhciPrereqsDesignPortfolioTitle = (
  record: TMhciPrereqsDesignPortfolio
): string => {
  return record.url?.toString() || String(record.id);
};
