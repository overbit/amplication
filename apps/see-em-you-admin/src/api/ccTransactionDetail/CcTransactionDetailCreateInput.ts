export type CcTransactionDetailCreateInput = {
  ccId: number;
  date: Date;
  time: Date;
  reportDate: Date;
  paymentId: number;
  transactionType: string;
  itemName: string;
  itemQty: number;
  itemPriceEach: number;
  itemGlString: string;
};
