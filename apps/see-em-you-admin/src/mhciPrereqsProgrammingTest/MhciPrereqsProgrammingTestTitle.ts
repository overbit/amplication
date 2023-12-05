import { MhciPrereqsProgrammingTest as TMhciPrereqsProgrammingTest } from "../api/mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTest";

export const MHCIPREREQSPROGRAMMINGTEST_TITLE_FIELD = "id";

export const MhciPrereqsProgrammingTestTitle = (
  record: TMhciPrereqsProgrammingTest
): string => {
  return record.id?.toString() || String(record.id);
};
