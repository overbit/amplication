import { ReclogWhereInput } from "./ReclogWhereInput";
import { ReclogOrderByInput } from "./ReclogOrderByInput";

export type ReclogFindManyArgs = {
  where?: ReclogWhereInput;
  orderBy?: Array<ReclogOrderByInput>;
  skip?: number;
  take?: number;
};
