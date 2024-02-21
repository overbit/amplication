import { MhciSlateGre as TMhciSlateGre } from "../api/mhciSlateGre/MhciSlateGre";

export const MHCISLATEGRE_TITLE_FIELD = "prefix";

export const MhciSlateGreTitle = (record: TMhciSlateGre): string => {
  return record.prefix?.toString() || String(record.id);
};
