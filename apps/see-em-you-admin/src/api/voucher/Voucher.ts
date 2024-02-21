export type Voucher = {
  code: string;
  active: boolean;
  allowMultiple: boolean;
  prettyCode: string | null;
  prog: string | null;
  id: number;
};
