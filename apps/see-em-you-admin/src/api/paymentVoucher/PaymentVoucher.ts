import { Payment } from "../payment/Payment";

export type PaymentVoucher = {
  datafileinfoId: number;
  id: number;
  payment?: Payment;
};
