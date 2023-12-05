import { SlatePub as TSlatePub } from "../api/slatePub/SlatePub";

export const SLATEPUB_TITLE_FIELD = "titlePub1";

export const SlatePubTitle = (record: TSlatePub): string => {
  return record.titlePub1?.toString() || String(record.id);
};
