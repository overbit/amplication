import { BlacklistReviewer as TBlacklistReviewer } from "../api/blacklistReviewer/BlacklistReviewer";

export const BLACKLISTREVIEWER_TITLE_FIELD = "id";

export const BlacklistReviewerTitle = (record: TBlacklistReviewer): string => {
  return record.id?.toString() || String(record.id);
};
