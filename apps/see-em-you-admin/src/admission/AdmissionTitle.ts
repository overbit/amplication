import { Admission as TAdmission } from "../api/admission/Admission";

export const ADMISSION_TITLE_FIELD = "id";

export const AdmissionTitle = (record: TAdmission): string => {
  return record.id?.toString() || String(record.id);
};
