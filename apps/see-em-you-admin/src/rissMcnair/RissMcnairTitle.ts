import { RissMcnair as TRissMcnair } from "../api/rissMcnair/RissMcnair";

export const RISSMCNAIR_TITLE_FIELD = "site";

export const RissMcnairTitle = (record: TRissMcnair): string => {
  return record.site?.toString() || String(record.id);
};
