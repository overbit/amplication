import { MitsSlatePub as TMitsSlatePub } from "../api/mitsSlatePub/MitsSlatePub";

export const MITSSLATEPUB_TITLE_FIELD = "titlePub1";

export const MitsSlatePubTitle = (record: TMitsSlatePub): string => {
  return record.titlePub1?.toString() || String(record.id);
};
