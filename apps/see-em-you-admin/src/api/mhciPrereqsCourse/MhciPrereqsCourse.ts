import { Application } from "../application/Application";
import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";
import { MhciPrereqsCourseDatafile } from "../mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafile";

export type MhciPrereqsCourse = {
  application?: Application;
  course_type?:
    | "Design"
    | "Programming"
    | "Multi_way_ANOVA"
    | "Single_way_ANOVA"
    | "Multi_factor_regression"
    | "Single_factor_regression";
  id: number;
  luUsersUsertypes?: LuUsersUsertype;
  mhciPrereqsCourseDatafiles?: Array<MhciPrereqsCourseDatafile>;
  periodId: number | null;
  programId: number | null;
  studentCourseGrade: string | null;
  studentCourseInstitution: string;
  studentCourseName: string;
  studentCourseTime: string;
  submittedToReviewer: number;
};
