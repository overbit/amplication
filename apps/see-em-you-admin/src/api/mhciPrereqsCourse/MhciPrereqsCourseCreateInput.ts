import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { LuUsersUsertypeWhereUniqueInput } from "../luUsersUsertype/LuUsersUsertypeWhereUniqueInput";
import { MhciPrereqsCourseDatafileCreateNestedManyWithoutMhciPrereqsCoursesInput } from "./MhciPrereqsCourseDatafileCreateNestedManyWithoutMhciPrereqsCoursesInput";

export type MhciPrereqsCourseCreateInput = {
  application: ApplicationWhereUniqueInput;
  course_type:
    | "Design"
    | "Programming"
    | "Multi_way_ANOVA"
    | "Single_way_ANOVA"
    | "Multi_factor_regression"
    | "Single_factor_regression";
  luUsersUsertypes: LuUsersUsertypeWhereUniqueInput;
  mhciPrereqsCourseDatafiles?: MhciPrereqsCourseDatafileCreateNestedManyWithoutMhciPrereqsCoursesInput;
  periodId?: number | null;
  programId?: number | null;
  studentCourseGrade?: string | null;
  studentCourseInstitution: string;
  studentCourseName: string;
  studentCourseTime: string;
  submittedToReviewer: number;
};
