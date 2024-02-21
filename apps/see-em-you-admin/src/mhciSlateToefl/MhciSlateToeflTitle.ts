import { MhciSlateToefl as TMhciSlateToefl } from "../api/mhciSlateToefl/MhciSlateToefl";

export const MHCISLATETOEFL_TITLE_FIELD = "prefix";

export const MhciSlateToeflTitle = (record: TMhciSlateToefl): string => {
  return record.prefix?.toString() || String(record.id);
};
