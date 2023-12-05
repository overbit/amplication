import { InterestWhereInput } from "./InterestWhereInput";
import { InterestOrderByInput } from "./InterestOrderByInput";

export type InterestFindManyArgs = {
  where?: InterestWhereInput;
  orderBy?: Array<InterestOrderByInput>;
  skip?: number;
  take?: number;
};
