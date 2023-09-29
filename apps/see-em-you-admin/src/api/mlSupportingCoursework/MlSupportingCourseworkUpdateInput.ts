import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type MlSupportingCourseworkUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  introCourse2Grade?: string;
  introCourse2Num?: string;
  introCourse2Semester?: string;
  introCourseGrade?: string;
  introCourseNum?: string;
  introCourseSemester?: string;
  ml1CourseGrade?: string;
  ml1CourseNum?: string;
  ml1CourseSemester?: string;
  ml2CourseGrade?: string;
  ml2CourseNum?: string;
  ml2CourseSemester?: string;
};
