import { TagMemberWhereInput } from "./TagMemberWhereInput";
import { TagMemberOrderByInput } from "./TagMemberOrderByInput";

export type TagMemberFindManyArgs = {
  where?: TagMemberWhereInput;
  orderBy?: Array<TagMemberOrderByInput>;
  skip?: number;
  take?: number;
};
