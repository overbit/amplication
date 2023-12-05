import { PromotionStatusWhereInput } from "./PromotionStatusWhereInput";
import { PromotionStatusOrderByInput } from "./PromotionStatusOrderByInput";

export type PromotionStatusFindManyArgs = {
  where?: PromotionStatusWhereInput;
  orderBy?: Array<PromotionStatusOrderByInput>;
  skip?: number;
  take?: number;
};
