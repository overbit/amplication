import { VoucherApplicationWhereInput } from "./VoucherApplicationWhereInput";
import { VoucherApplicationOrderByInput } from "./VoucherApplicationOrderByInput";

export type VoucherApplicationFindManyArgs = {
  where?: VoucherApplicationWhereInput;
  orderBy?: Array<VoucherApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
