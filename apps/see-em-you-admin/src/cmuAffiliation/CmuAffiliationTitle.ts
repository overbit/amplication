import { CmuAffiliation as TCmuAffiliation } from "../api/cmuAffiliation/CmuAffiliation";

export const CMUAFFILIATION_TITLE_FIELD = "id";

export const CmuAffiliationTitle = (record: TCmuAffiliation): string => {
  return record.id?.toString() || String(record.id);
};
