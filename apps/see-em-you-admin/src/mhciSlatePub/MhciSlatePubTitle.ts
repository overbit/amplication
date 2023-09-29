import { MhciSlatePub as TMhciSlatePub } from "../api/mhciSlatePub/MhciSlatePub";

export const MHCISLATEPUB_TITLE_FIELD = "titlePub1";

export const MhciSlatePubTitle = (record: TMhciSlatePub): string => {
  return record.titlePub1?.toString() || String(record.id);
};
