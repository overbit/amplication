import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ExperienceCreateInput = {
  datafileId?: number | null;
  experiencetype?: number | null;
  orderEntered?: number | null;
  company?: string | null;
  startDate?: Date | null;
  endDate?: string | null;
  yearsExp?: string | null;
  address?: string | null;
  jobTitle?: string | null;
  jobDescription?: string | null;
  application: ApplicationWhereUniqueInput;
};
