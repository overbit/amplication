import { SortOrder } from "../../util/SortOrder";

export type PeriodUmbrellaOrderByInput = {
  admissionTerm?: SortOrder;
  admissionYear?: SortOrder;
  higherFeeDate?: SortOrder;
  umbrellaName?: SortOrder;
  lastPaymentDate?: SortOrder;
  id?: SortOrder;
};
