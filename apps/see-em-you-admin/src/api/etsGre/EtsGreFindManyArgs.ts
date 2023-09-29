import { EtsGreWhereInput } from "./EtsGreWhereInput";
import { EtsGreOrderByInput } from "./EtsGreOrderByInput";

export type EtsGreFindManyArgs = {
  where?: EtsGreWhereInput;
  orderBy?: Array<EtsGreOrderByInput>;
  skip?: number;
  take?: number;
};
