import { SortOrder } from "../../util/SortOrder";

export type ApplicationProgramLetterOrderByInput = {
  admitSent?: SortOrder;
  admitSentDate?: SortOrder;
  id?: SortOrder;
  rejectionSent?: SortOrder;
  rejectionSentDate?: SortOrder;
  waitlistSent?: SortOrder;
  waitlistSentDate?: SortOrder;
};
