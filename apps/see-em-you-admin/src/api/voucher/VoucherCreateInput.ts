export type VoucherCreateInput = {
  code: string;
  active: boolean;
  allowMultiple: boolean;
  prettyCode?: string | null;
  prog?: string | null;
};
