import { ContentWhereInput } from "./ContentWhereInput";
import { ContentOrderByInput } from "./ContentOrderByInput";

export type ContentFindManyArgs = {
  where?: ContentWhereInput;
  orderBy?: Array<ContentOrderByInput>;
  skip?: number;
  take?: number;
};
