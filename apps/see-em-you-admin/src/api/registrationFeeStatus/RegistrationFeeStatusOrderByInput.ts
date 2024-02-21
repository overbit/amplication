import { SortOrder } from "../../util/SortOrder";

export type RegistrationFeeStatusOrderByInput = {
  departmentId?: SortOrder;
  amount?: SortOrder;
  paid?: SortOrder;
  waived?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
