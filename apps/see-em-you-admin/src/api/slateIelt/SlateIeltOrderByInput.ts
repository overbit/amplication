import { SortOrder } from "../../util/SortOrder";

export type SlateIeltOrderByInput = {
  id?: SortOrder;
  prefix?: SortOrder;
  first?: SortOrder;
  middle?: SortOrder;
  last?: SortOrder;
  ieltsOverallBandScore?: SortOrder;
  ieltsListening?: SortOrder;
  ieltsReading?: SortOrder;
  ieltsWriting?: SortOrder;
  ieltsSpeaking?: SortOrder;
};
