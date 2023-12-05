export type PeriodUmbrellaCreateInput = {
  admissionTerm: string;
  admissionYear: number;
  higherFeeDate?: Date | null;
  lastPaymentDate?: Date | null;
  umbrellaName?: string | null;
};
