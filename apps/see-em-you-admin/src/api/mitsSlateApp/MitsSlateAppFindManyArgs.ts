import { MitsSlateAppWhereInput } from "./MitsSlateAppWhereInput";
import { MitsSlateAppOrderByInput } from "./MitsSlateAppOrderByInput";

export type MitsSlateAppFindManyArgs = {
  where?: MitsSlateAppWhereInput;
  orderBy?: Array<MitsSlateAppOrderByInput>;
  skip?: number;
  take?: number;
};
