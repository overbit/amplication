import { SlateLangCodeWhereInput } from "./SlateLangCodeWhereInput";
import { SlateLangCodeOrderByInput } from "./SlateLangCodeOrderByInput";

export type SlateLangCodeFindManyArgs = {
  where?: SlateLangCodeWhereInput;
  orderBy?: Array<SlateLangCodeOrderByInput>;
  skip?: number;
  take?: number;
};
