import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RissFundingUpdateInput = {
  externalFunding?: boolean;
  externalSource?: string | null;
  externalAmount?: string | null;
  reuScholarship?: boolean;
  directFunding?: boolean;
  application?: ApplicationWhereUniqueInput;
};
