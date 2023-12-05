import { GpascaleWhereInput } from "./GpascaleWhereInput";
import { GpascaleOrderByInput } from "./GpascaleOrderByInput";

export type GpascaleFindManyArgs = {
  where?: GpascaleWhereInput;
  orderBy?: Array<GpascaleOrderByInput>;
  skip?: number;
  take?: number;
};
