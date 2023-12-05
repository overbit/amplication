import { Committee as TCommittee } from "../api/committee/Committee";

export const COMMITTEE_TITLE_FIELD = "id";

export const CommitteeTitle = (record: TCommittee): string => {
  return record.id?.toString() || String(record.id);
};
