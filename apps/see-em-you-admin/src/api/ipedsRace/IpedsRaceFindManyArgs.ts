import { IpedsRaceWhereInput } from "./IpedsRaceWhereInput";
import { IpedsRaceOrderByInput } from "./IpedsRaceOrderByInput";

export type IpedsRaceFindManyArgs = {
  where?: IpedsRaceWhereInput;
  orderBy?: Array<IpedsRaceOrderByInput>;
  skip?: number;
  take?: number;
};
