import { SlateTestScore as TSlateTestScore } from "../api/slateTestScore/SlateTestScore";

export const SLATETESTSCORE_TITLE_FIELD = "first";

export const SlateTestScoreTitle = (record: TSlateTestScore): string => {
  return record.first?.toString() || String(record.id);
};
