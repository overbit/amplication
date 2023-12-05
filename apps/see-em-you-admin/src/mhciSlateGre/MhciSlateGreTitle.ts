import { MhciSlateGre as TMhciSlateGre } from "../api/mhciSlateGre/MhciSlateGre";

export const MHCISLATEGRE_TITLE_FIELD = "first";

export const MhciSlateGreTitle = (record: TMhciSlateGre): string => {
  return record.first?.toString() || String(record.id);
};
