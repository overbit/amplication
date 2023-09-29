import { SortOrder } from "../../util/SortOrder";

export type RegistrationFeeStatusOrderByInput = {
  amount?: SortOrder;
  application_id?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  paid?: SortOrder;
  waived?: SortOrder;
};
