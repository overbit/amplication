import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ExperienceCreateInput = {
  address?: string | null;
  application: ApplicationWhereUniqueInput;
  company?: string | null;
  datafileId?: number | null;
  endDate?: string | null;
  experiencetype?: number | null;
  jobDescription?: string | null;
  jobTitle?: string | null;
  orderEntered?: number | null;
  startDate?: Date | null;
  yearsExp?: string | null;
};
