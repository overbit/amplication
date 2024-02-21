import { SortOrder } from "../../util/SortOrder";

export type MseRiskFactorOrderByInput = {
  applicationId?: SortOrder;
  reviewerId?: SortOrder;
  language?: SortOrder;
  experience?: SortOrder;
  academic?: SortOrder;
  other?: SortOrder;
  otherText?: SortOrder;
  id?: SortOrder;
};
