import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RissFundingCreateInput = {
  application: ApplicationWhereUniqueInput;
  directFunding: boolean;
  externalAmount?: string | null;
  externalFunding: boolean;
  externalSource?: string | null;
  reuScholarship: boolean;
};
