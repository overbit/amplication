import { SortOrder } from "../../util/SortOrder";

export type UnitOrderByInput = {
  applicationBasePrice?: SortOrder;
  applicationProgramPrice?: SortOrder;
  id?: SortOrder;
  parentUnitId?: SortOrder;
  unitCcEmail?: SortOrder;
  unitDescription?: SortOrder;
  unitName?: SortOrder;
  unitNameShort?: SortOrder;
  unitOracleString?: SortOrder;
  unitSystemEmail?: SortOrder;
  unitUrl?: SortOrder;
};
