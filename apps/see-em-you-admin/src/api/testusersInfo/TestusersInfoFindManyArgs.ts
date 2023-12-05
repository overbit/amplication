import { TestusersInfoWhereInput } from "./TestusersInfoWhereInput";
import { TestusersInfoOrderByInput } from "./TestusersInfoOrderByInput";

export type TestusersInfoFindManyArgs = {
  where?: TestusersInfoWhereInput;
  orderBy?: Array<TestusersInfoOrderByInput>;
  skip?: number;
  take?: number;
};
