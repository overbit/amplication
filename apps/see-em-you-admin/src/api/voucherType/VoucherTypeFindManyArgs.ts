import { VoucherTypeWhereInput } from "./VoucherTypeWhereInput";
import { VoucherTypeOrderByInput } from "./VoucherTypeOrderByInput";

export type VoucherTypeFindManyArgs = {
  where?: VoucherTypeWhereInput;
  orderBy?: Array<VoucherTypeOrderByInput>;
  skip?: number;
  take?: number;
};
