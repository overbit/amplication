import { Multiprogramlockout as TMultiprogramlockout } from "../api/multiprogramlockout/Multiprogramlockout";

export const MULTIPROGRAMLOCKOUT_TITLE_FIELD = "id";

export const MultiprogramlockoutTitle = (
  record: TMultiprogramlockout
): string => {
  return record.id?.toString() || String(record.id);
};
