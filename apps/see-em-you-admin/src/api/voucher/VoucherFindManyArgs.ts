import { VoucherWhereInput } from "./VoucherWhereInput";
import { VoucherOrderByInput } from "./VoucherOrderByInput";

export type VoucherFindManyArgs = {
  where?: VoucherWhereInput;
  orderBy?: Array<VoucherOrderByInput>;
  skip?: number;
  take?: number;
};
