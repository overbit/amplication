import { WaiverApplicationWhereInput } from "./WaiverApplicationWhereInput";
import { WaiverApplicationOrderByInput } from "./WaiverApplicationOrderByInput";

export type WaiverApplicationFindManyArgs = {
  where?: WaiverApplicationWhereInput;
  orderBy?: Array<WaiverApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
