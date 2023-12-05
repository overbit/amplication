import { PhoneScreenWhereInput } from "./PhoneScreenWhereInput";
import { PhoneScreenOrderByInput } from "./PhoneScreenOrderByInput";

export type PhoneScreenFindManyArgs = {
  where?: PhoneScreenWhereInput;
  orderBy?: Array<PhoneScreenOrderByInput>;
  skip?: number;
  take?: number;
};
