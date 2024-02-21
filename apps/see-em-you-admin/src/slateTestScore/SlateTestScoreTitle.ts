import { SlateTestScore as TSlateTestScore } from "../api/slateTestScore/SlateTestScore";

export const SLATETESTSCORE_TITLE_FIELD = "prefix";

export const SlateTestScoreTitle = (record: TSlateTestScore): string => {
  return record.prefix?.toString() || String(record.id);
};
