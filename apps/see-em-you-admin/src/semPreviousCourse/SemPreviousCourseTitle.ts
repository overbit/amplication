import { SemPreviousCourse as TSemPreviousCourse } from "../api/semPreviousCourse/SemPreviousCourse";

export const SEMPREVIOUSCOURSE_TITLE_FIELD = "courseName";

export const SemPreviousCourseTitle = (record: TSemPreviousCourse): string => {
  return record.courseName?.toString() || String(record.id);
};
