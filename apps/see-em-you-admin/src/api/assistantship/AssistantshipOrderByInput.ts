import { SortOrder } from "../../util/SortOrder";

export type AssistantshipOrderByInput = {
  id?: SortOrder;
  applicationId?: SortOrder;
  requested?: SortOrder;
  granted?: SortOrder;
};
