import { PeSlateAppWhereInput } from "./PeSlateAppWhereInput";
import { PeSlateAppOrderByInput } from "./PeSlateAppOrderByInput";

export type PeSlateAppFindManyArgs = {
  where?: PeSlateAppWhereInput;
  orderBy?: Array<PeSlateAppOrderByInput>;
  skip?: number;
  take?: number;
};
