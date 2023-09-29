export type VoucherCreateInput = {
  active: boolean;
  allowMultiple: boolean;
  code: string;
  prettyCode?: string | null;
  prog?: string | null;
};
