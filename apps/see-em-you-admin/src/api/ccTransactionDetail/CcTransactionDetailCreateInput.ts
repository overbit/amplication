export type CcTransactionDetailCreateInput = {
  ccId: number;
  date: Date;
  itemGlString: string;
  itemName: string;
  itemPriceEach: number;
  itemQty: number;
  paymentId: number;
  reportDate: Date;
  time: Date;
  transactionType: string;
};
