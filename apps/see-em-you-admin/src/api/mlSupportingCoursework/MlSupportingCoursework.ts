import { Application } from "../application/Application";

export type MlSupportingCoursework = {
  introCourseNum: string;
  introCourseSemester: string;
  introCourseGrade: string;
  introCourse2Num: string;
  introCourse2Semester: string;
  introCourse2Grade: string;
  ml1CourseNum: string;
  ml1CourseSemester: string;
  ml1CourseGrade: string;
  ml2CourseNum: string;
  ml2CourseSemester: string;
  ml2CourseGrade: string;
  application?: Application;
  id: number;
};
