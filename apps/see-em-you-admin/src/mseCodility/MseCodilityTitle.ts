import { MseCodility as TMseCodility } from "../api/mseCodility/MseCodility";

export const MSECODILITY_TITLE_FIELD = "lastName";

export const MseCodilityTitle = (record: TMseCodility): string => {
  return record.lastName?.toString() || String(record.id);
};
