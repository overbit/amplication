import { SortOrder } from "../../util/SortOrder";

export type UsersInfoOrderByInput = {
  userId?: SortOrder;
  gender?: SortOrder;
  selfGender?: SortOrder;
  selfGenderOther?: SortOrder;
  dob?: SortOrder;
  addressCurStreet1?: SortOrder;
  addressCurStreet2?: SortOrder;
  addressCurStreet3?: SortOrder;
  addressCurStreet4?: SortOrder;
  addressCurCity?: SortOrder;
  addressCurState?: SortOrder;
  addressCurPcode?: SortOrder;
  addressCurCountry?: SortOrder;
  addressCurTel?: SortOrder;
  addressCurTelMobile?: SortOrder;
  addressCurTelWork?: SortOrder;
  addressPermStreet1?: SortOrder;
  addressPermStreet2?: SortOrder;
  addressPermStreet3?: SortOrder;
  addressPermStreet4?: SortOrder;
  addressPermCity?: SortOrder;
  addressPermState?: SortOrder;
  addressPermPcode?: SortOrder;
  addressPermCountry?: SortOrder;
  addressPermTel?: SortOrder;
  addressPermTelMobile?: SortOrder;
  addressPermTelWork?: SortOrder;
  ethnicity?: SortOrder;
  visastatus?: SortOrder;
  usPerm?: SortOrder;
  company?: SortOrder;
  buckleyWaive?: SortOrder;
  homepage?: SortOrder;
  citCountry?: SortOrder;
  citCountrySecond?: SortOrder;
  nativeTongue?: SortOrder;
  additionalinfo?: SortOrder;
  curPaRes?: SortOrder;
  qqNumber?: SortOrder;
  firstGenUgrad?: SortOrder;
  firstGenGrad?: SortOrder;
  usCitizenOrPermanentResident?: SortOrder;
  id?: SortOrder;
};
