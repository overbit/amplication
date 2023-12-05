import { MhciPrereqsDesignPortfolio as TMhciPrereqsDesignPortfolio } from "../api/mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolio";

export const MHCIPREREQSDESIGNPORTFOLIO_TITLE_FIELD = "description";

export const MhciPrereqsDesignPortfolioTitle = (
  record: TMhciPrereqsDesignPortfolio
): string => {
  return record.description?.toString() || String(record.id);
};
