import { Grescore as TGrescore } from "../api/grescore/Grescore";

export const GRESCORE_TITLE_FIELD = "analyticalpercentile";

export const GrescoreTitle = (record: TGrescore): string => {
  return record.analyticalpercentile?.toString() || String(record.id);
};
