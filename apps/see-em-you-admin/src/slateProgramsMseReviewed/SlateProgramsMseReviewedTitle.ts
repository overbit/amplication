import { SlateProgramsMseReviewed as TSlateProgramsMseReviewed } from "../api/slateProgramsMseReviewed/SlateProgramsMseReviewed";

export const SLATEPROGRAMSMSEREVIEWED_TITLE_FIELD = "prefix";

export const SlateProgramsMseReviewedTitle = (
  record: TSlateProgramsMseReviewed
): string => {
  return record.prefix?.toString() || String(record.id);
};
