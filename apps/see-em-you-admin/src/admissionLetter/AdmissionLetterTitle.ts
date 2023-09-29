import { AdmissionLetter as TAdmissionLetter } from "../api/admissionLetter/AdmissionLetter";

export const ADMISSIONLETTER_TITLE_FIELD = "sections";

export const AdmissionLetterTitle = (record: TAdmissionLetter): string => {
  return record.sections?.toString() || String(record.id);
};
