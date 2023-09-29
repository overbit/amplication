import { ApplicationDecisionIni as TApplicationDecisionIni } from "../api/applicationDecisionIni/ApplicationDecisionIni";

export const APPLICATIONDECISIONINI_TITLE_FIELD = "comments";

export const ApplicationDecisionIniTitle = (
  record: TApplicationDecisionIni
): string => {
  return record.comments?.toString() || String(record.id);
};
