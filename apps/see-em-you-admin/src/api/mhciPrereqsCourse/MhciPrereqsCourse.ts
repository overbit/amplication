import { Application } from "../application/Application";
import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";
import { MhciPrereqsCourseDatafile } from "../mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafile";

export type MhciPrereqsCourse = {
  course_type?:
    | "Design"
    | "Programming"
    | "Multi_way_ANOVA"
    | "Single_way_ANOVA"
    | "Multi_factor_regression"
    | "Single_factor_regression";
  studentCourseName: string;
  studentCourseTime: string;
  studentCourseInstitution: string;
  studentCourseGrade: string | null;
  submittedToReviewer: number;
  periodId: number | null;
  programId: number | null;
  application?: Application;
  luUsersUsertypes?: LuUsersUsertype;
  mhciPrereqsCourseDatafiles?: Array<MhciPrereqsCourseDatafile>;
  id: number;
};
