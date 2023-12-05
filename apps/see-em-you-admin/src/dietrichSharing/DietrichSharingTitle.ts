import { DietrichSharing as TDietrichSharing } from "../api/dietrichSharing/DietrichSharing";

export const DIETRICHSHARING_TITLE_FIELD = "id";

export const DietrichSharingTitle = (record: TDietrichSharing): string => {
  return record.id?.toString() || String(record.id);
};
