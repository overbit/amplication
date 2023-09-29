import { CommitteeWhereInput } from "./CommitteeWhereInput";
import { CommitteeOrderByInput } from "./CommitteeOrderByInput";

export type CommitteeFindManyArgs = {
  where?: CommitteeWhereInput;
  orderBy?: Array<CommitteeOrderByInput>;
  skip?: number;
  take?: number;
};
