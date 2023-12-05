import { ApplicantIpedsRace as TApplicantIpedsRace } from "../api/applicantIpedsRace/ApplicantIpedsRace";

export const APPLICANTIPEDSRACE_TITLE_FIELD = "id";

export const ApplicantIpedsRaceTitle = (
  record: TApplicantIpedsRace
): string => {
  return record.id?.toString() || String(record.id);
};
