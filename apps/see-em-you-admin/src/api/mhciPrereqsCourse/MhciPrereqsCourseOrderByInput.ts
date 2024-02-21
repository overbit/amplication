import { SortOrder } from "../../util/SortOrder";

export type MhciPrereqsCourseOrderByInput = {
  course_type?: SortOrder;
  studentCourseName?: SortOrder;
  studentCourseTime?: SortOrder;
  studentCourseInstitution?: SortOrder;
  studentCourseGrade?: SortOrder;
  submittedToReviewer?: SortOrder;
  periodId?: SortOrder;
  programId?: SortOrder;
  application_id?: SortOrder;
  student_lu_users_usertypes_id?: SortOrder;
  id?: SortOrder;
};
