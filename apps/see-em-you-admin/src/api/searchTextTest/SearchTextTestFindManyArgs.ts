import { SearchTextTestWhereInput } from "./SearchTextTestWhereInput";
import { SearchTextTestOrderByInput } from "./SearchTextTestOrderByInput";

export type SearchTextTestFindManyArgs = {
  where?: SearchTextTestWhereInput;
  orderBy?: Array<SearchTextTestOrderByInput>;
  skip?: number;
  take?: number;
};
