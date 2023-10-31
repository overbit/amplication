import { Customer } from "../customer/Customer";

export type Address = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  state: string | null;
  zip: number | null;
  customers?: Array<Customer>;
};
