import { Order } from "../order/Order";

export type Product = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  itemPrice: number | null;
  description: string | null;
  orders?: Array<Order>;
};
