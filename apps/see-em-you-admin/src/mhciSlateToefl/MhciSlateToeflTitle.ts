import { MhciSlateToefl as TMhciSlateToefl } from "../api/mhciSlateToefl/MhciSlateToefl";

export const MHCISLATETOEFL_TITLE_FIELD = "first";

export const MhciSlateToeflTitle = (record: TMhciSlateToefl): string => {
  return record.first?.toString() || String(record.id);
};
