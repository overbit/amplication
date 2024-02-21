import { Payment } from "../payment/Payment";

export type PaymentVoucher = {
  datafileinfoId: number;
  payment?: Payment;
  id: number;
};
