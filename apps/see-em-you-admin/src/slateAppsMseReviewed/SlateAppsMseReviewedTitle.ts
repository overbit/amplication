import { SlateAppsMseReviewed as TSlateAppsMseReviewed } from "../api/slateAppsMseReviewed/SlateAppsMseReviewed";

export const SLATEAPPSMSEREVIEWED_TITLE_FIELD = "mailingAddressCountryName";

export const SlateAppsMseReviewedTitle = (
  record: TSlateAppsMseReviewed
): string => {
  return record.mailingAddressCountryName?.toString() || String(record.id);
};
