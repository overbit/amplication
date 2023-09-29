import { TagInstanceWhereInput } from "./TagInstanceWhereInput";
import { TagInstanceOrderByInput } from "./TagInstanceOrderByInput";

export type TagInstanceFindManyArgs = {
  where?: TagInstanceWhereInput;
  orderBy?: Array<TagInstanceOrderByInput>;
  skip?: number;
  take?: number;
};
