import { ExceptionAppWhereInput } from "./ExceptionAppWhereInput";
import { ExceptionAppOrderByInput } from "./ExceptionAppOrderByInput";

export type ExceptionAppFindManyArgs = {
  where?: ExceptionAppWhereInput;
  orderBy?: Array<ExceptionAppOrderByInput>;
  skip?: number;
  take?: number;
};
