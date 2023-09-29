import { DietrichDiversity as TDietrichDiversity } from "../api/dietrichDiversity/DietrichDiversity";

export const DIETRICHDIVERSITY_TITLE_FIELD = "background";

export const DietrichDiversityTitle = (record: TDietrichDiversity): string => {
  return record.background?.toString() || String(record.id);
};
