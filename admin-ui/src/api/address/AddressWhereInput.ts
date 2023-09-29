import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";

export type AddressWhereInput = {
  id?: IntFilter;
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
  customers?: CustomerListRelationFilter;
};
