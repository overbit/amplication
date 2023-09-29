import { SlateAppWhereInput } from "./SlateAppWhereInput";
import { SlateAppOrderByInput } from "./SlateAppOrderByInput";

export type SlateAppFindManyArgs = {
  where?: SlateAppWhereInput;
  orderBy?: Array<SlateAppOrderByInput>;
  skip?: number;
  take?: number;
};
