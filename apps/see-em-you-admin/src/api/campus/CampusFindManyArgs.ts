import { CampusWhereInput } from "./CampusWhereInput";
import { CampusOrderByInput } from "./CampusOrderByInput";

export type CampusFindManyArgs = {
  where?: CampusWhereInput;
  orderBy?: Array<CampusOrderByInput>;
  skip?: number;
  take?: number;
};
