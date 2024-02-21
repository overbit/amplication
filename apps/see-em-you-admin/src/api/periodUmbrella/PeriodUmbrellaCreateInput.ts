export type PeriodUmbrellaCreateInput = {
  admissionTerm: string;
  admissionYear: number;
  higherFeeDate?: Date | null;
  umbrellaName?: string | null;
  lastPaymentDate?: Date | null;
};
