import { SortOrder } from "../../util/SortOrder";

export type SlateToeflOrderByInput = {
  first?: SortOrder;
  id?: SortOrder;
  last?: SortOrder;
  middle?: SortOrder;
  prefix?: SortOrder;
  toeflListening?: SortOrder;
  toeflReading?: SortOrder;
  toeflSpeaking?: SortOrder;
  toeflStructureWrittenExpression?: SortOrder;
  toeflTotal?: SortOrder;
};
