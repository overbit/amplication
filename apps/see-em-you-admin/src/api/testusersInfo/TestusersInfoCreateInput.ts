export type TestusersInfoCreateInput = {
  userId: number;
  gender?: string | null;
  dob?: Date | null;
  addressCurStreet1?: string | null;
  addressCurStreet2?: string | null;
  addressCurStreet3?: string | null;
  addressCurStreet4?: string | null;
  addressCurCity?: string | null;
  addressCurState?: number | null;
  addressCurPcode?: string | null;
  addressCurCountry?: number | null;
  addressCurTel?: string | null;
  addressCurTelMobile?: string | null;
  addressCurTelWork?: string | null;
  addressPermStreet1?: string | null;
  addressPermStreet2?: string | null;
  addressPermStreet3?: string | null;
  addressPermStreet4?: string | null;
  addressPermCity?: string | null;
  addressPermState?: number | null;
  addressPermPcode?: string | null;
  addressPermCountry?: number | null;
  addressPermTel?: string | null;
  addressPermTelMobile?: string | null;
  addressPermTelWork?: string | null;
  ethnicity?: number | null;
  ethtest?: number | null;
  visastatus?: number | null;
  company?: string | null;
  buckleyWaive?: boolean | null;
  homepage?: string | null;
  citCountry?: number | null;
  additionalinfo?: string | null;
  curPaRes?: string | null;
};
