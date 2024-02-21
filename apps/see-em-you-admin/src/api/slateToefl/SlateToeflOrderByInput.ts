import { SortOrder } from "../../util/SortOrder";

export type SlateToeflOrderByInput = {
  prefix?: SortOrder;
  first?: SortOrder;
  middle?: SortOrder;
  last?: SortOrder;
  toeflTotal?: SortOrder;
  toeflListening?: SortOrder;
  toeflReading?: SortOrder;
  toeflStructureWrittenExpression?: SortOrder;
  toeflSpeaking?: SortOrder;
  id?: SortOrder;
};
