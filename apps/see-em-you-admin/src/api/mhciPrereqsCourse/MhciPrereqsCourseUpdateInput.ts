import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { MhciPrereqsCourseDatafileUpdateManyWithoutMhciPrereqsCoursesInput } from "./MhciPrereqsCourseDatafileUpdateManyWithoutMhciPrereqsCoursesInput";

export type MhciPrereqsCourseUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  course_type?:
    | "Design"
    | "Programming"
    | "Multi_way_ANOVA"
    | "Single_way_ANOVA"
    | "Multi_factor_regression"
    | "Single_factor_regression";
  luUsersUsertypes?: LuUsersUsertypeWhereUniqueInput;
  mhciPrereqsCourseDatafiles?: MhciPrereqsCourseDatafileUpdateManyWithoutMhciPrereqsCoursesInput;
  periodId?: number | null;
  programId?: number | null;
  studentCourseGrade?: string | null;
  studentCourseInstitution?: string;
  studentCourseName?: string;
  studentCourseTime?: string;
  submittedToReviewer?: number;
};
