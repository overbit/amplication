import { RissFunding as TRissFunding } from "../api/rissFunding/RissFunding";

export const RISSFUNDING_TITLE_FIELD = "externalSource";

export const RissFundingTitle = (record: TRissFunding): string => {
  return record.externalSource?.toString() || String(record.id);
};
