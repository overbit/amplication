import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RissFundingUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  directFunding?: boolean;
  externalAmount?: string | null;
  externalFunding?: boolean;
  externalSource?: string | null;
  reuScholarship?: boolean;
};
