import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  id?: IntFilter;
  quantity?: IntNullableFilter;
  discount?: FloatNullableFilter;
  totalPrice?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
