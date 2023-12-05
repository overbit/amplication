import { MitsSlateAppsMseReviewed as TMitsSlateAppsMseReviewed } from "../api/mitsSlateAppsMseReviewed/MitsSlateAppsMseReviewed";

export const MITSSLATEAPPSMSEREVIEWED_TITLE_FIELD = "mailingAddressCountryName";

export const MitsSlateAppsMseReviewedTitle = (
  record: TMitsSlateAppsMseReviewed
): string => {
  return record.mailingAddressCountryName?.toString() || String(record.id);
};
