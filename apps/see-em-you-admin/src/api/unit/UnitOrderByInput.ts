import { SortOrder } from "../../util/SortOrder";

export type UnitOrderByInput = {
  unitName?: SortOrder;
  unitNameShort?: SortOrder;
  unitDescription?: SortOrder;
  unitUrl?: SortOrder;
  unitOracleString?: SortOrder;
  unitSystemEmail?: SortOrder;
  unitCcEmail?: SortOrder;
  applicationBasePrice?: SortOrder;
  applicationProgramPrice?: SortOrder;
  parentUnitId?: SortOrder;
  id?: SortOrder;
};
