import { ContentBakWhereInput } from "./ContentBakWhereInput";
import { ContentBakOrderByInput } from "./ContentBakOrderByInput";

export type ContentBakFindManyArgs = {
  where?: ContentBakWhereInput;
  orderBy?: Array<ContentBakOrderByInput>;
  skip?: number;
  take?: number;
};
