import { SortOrder } from "../../util/SortOrder";

export type ApplicationProgramLetterOrderByInput = {
  rejectionSent?: SortOrder;
  rejectionSentDate?: SortOrder;
  admitSent?: SortOrder;
  admitSentDate?: SortOrder;
  waitlistSent?: SortOrder;
  waitlistSentDate?: SortOrder;
  id?: SortOrder;
};
