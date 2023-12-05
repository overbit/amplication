import { RissFunding as TRissFunding } from "../api/rissFunding/RissFunding";

export const RISSFUNDING_TITLE_FIELD = "externalAmount";

export const RissFundingTitle = (record: TRissFunding): string => {
  return record.externalAmount?.toString() || String(record.id);
};
