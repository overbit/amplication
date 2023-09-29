import { MhciSlateAppWhereInput } from "./MhciSlateAppWhereInput";
import { MhciSlateAppOrderByInput } from "./MhciSlateAppOrderByInput";

export type MhciSlateAppFindManyArgs = {
  where?: MhciSlateAppWhereInput;
  orderBy?: Array<MhciSlateAppOrderByInput>;
  skip?: number;
  take?: number;
};
