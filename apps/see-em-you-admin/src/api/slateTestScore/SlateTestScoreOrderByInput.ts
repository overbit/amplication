import { SortOrder } from "../../util/SortOrder";

export type SlateTestScoreOrderByInput = {
  prefix?: SortOrder;
  first?: SortOrder;
  middle?: SortOrder;
  last?: SortOrder;
  greVerbal?: SortOrder;
  greVerbalPct?: SortOrder;
  greQuantitative?: SortOrder;
  greQuantitativePct?: SortOrder;
  greAnalyticalWriting?: SortOrder;
  greAnalyticalWritingPct?: SortOrder;
  id?: SortOrder;
};
