import { ApplicationContentWhereInput } from "./ApplicationContentWhereInput";
import { ApplicationContentOrderByInput } from "./ApplicationContentOrderByInput";

export type ApplicationContentFindManyArgs = {
  where?: ApplicationContentWhereInput;
  orderBy?: Array<ApplicationContentOrderByInput>;
  skip?: number;
  take?: number;
};
