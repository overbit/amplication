export type VoucherApplicationError = {
  appId: number;
  code: string;
  vaId: number | null;
  errMsg: string | null;
  allowMultiple: number | null;
  id: number;
};
