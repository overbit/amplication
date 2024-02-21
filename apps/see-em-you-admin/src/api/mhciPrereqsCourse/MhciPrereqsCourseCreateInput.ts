import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { MhciPrereqsCourseDatafileCreateNestedManyWithoutMhciPrereqsCoursesInput } from "./MhciPrereqsCourseDatafileCreateNestedManyWithoutMhciPrereqsCoursesInput";

export type MhciPrereqsCourseCreateInput = {
  course_type:
    | "Design"
    | "Programming"
    | "Multi_way_ANOVA"
    | "Single_way_ANOVA"
    | "Multi_factor_regression"
    | "Single_factor_regression";
  studentCourseName: string;
  studentCourseTime: string;
  studentCourseInstitution: string;
  studentCourseGrade?: string | null;
  submittedToReviewer: number;
  periodId?: number | null;
  programId?: number | null;
  application: ApplicationWhereUniqueInput;
  luUsersUsertypes: LuUsersUsertypeWhereUniqueInput;
  mhciPrereqsCourseDatafiles?: MhciPrereqsCourseDatafileCreateNestedManyWithoutMhciPrereqsCoursesInput;
};
