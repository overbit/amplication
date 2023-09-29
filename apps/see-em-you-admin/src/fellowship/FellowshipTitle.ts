import { Fellowship as TFellowship } from "../api/fellowship/Fellowship";

export const FELLOWSHIP_TITLE_FIELD = "name";

export const FellowshipTitle = (record: TFellowship): string => {
  return record.name?.toString() || String(record.id);
};
