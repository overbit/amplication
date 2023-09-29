import { CountryWhereInput } from "./CountryWhereInput";

export type CountryListRelationFilter = {
  every?: CountryWhereInput;
  some?: CountryWhereInput;
  none?: CountryWhereInput;
};
