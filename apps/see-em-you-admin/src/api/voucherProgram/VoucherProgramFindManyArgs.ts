import { VoucherProgramWhereInput } from "./VoucherProgramWhereInput";
import { VoucherProgramOrderByInput } from "./VoucherProgramOrderByInput";

export type VoucherProgramFindManyArgs = {
  where?: VoucherProgramWhereInput;
  orderBy?: Array<VoucherProgramOrderByInput>;
  skip?: number;
  take?: number;
};
