export type VoucherApplicationErrorCreateInput = {
  appId: number;
  code: string;
  vaId?: number | null;
  errMsg?: string | null;
  allowMultiple?: number | null;
};
