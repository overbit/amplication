import { SortOrder } from "../../util/SortOrder";

export type MhciPrereqsCourseOrderByInput = {
  application_id?: SortOrder;
  course_type?: SortOrder;
  id?: SortOrder;
  student_lu_users_usertypes_id?: SortOrder;
  periodId?: SortOrder;
  programId?: SortOrder;
  studentCourseGrade?: SortOrder;
  studentCourseInstitution?: SortOrder;
  studentCourseName?: SortOrder;
  studentCourseTime?: SortOrder;
  submittedToReviewer?: SortOrder;
};
