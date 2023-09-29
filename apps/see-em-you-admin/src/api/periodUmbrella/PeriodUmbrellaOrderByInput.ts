import { SortOrder } from "../../util/SortOrder";

export type PeriodUmbrellaOrderByInput = {
  admissionTerm?: SortOrder;
  admissionYear?: SortOrder;
  higherFeeDate?: SortOrder;
  id?: SortOrder;
  lastPaymentDate?: SortOrder;
  umbrellaName?: SortOrder;
};
