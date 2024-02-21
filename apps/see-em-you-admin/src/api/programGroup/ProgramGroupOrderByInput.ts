import { SortOrder } from "../../util/SortOrder";

export type ProgramGroupOrderByInput = {
  periodId?: SortOrder;
  unitId?: SortOrder;
  programGroupName?: SortOrder;
  programGroupNameShort?: SortOrder;
  programGroupDescription?: SortOrder;
  id?: SortOrder;
};
