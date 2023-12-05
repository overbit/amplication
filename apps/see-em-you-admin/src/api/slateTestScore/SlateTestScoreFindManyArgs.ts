import { SlateTestScoreWhereInput } from "./SlateTestScoreWhereInput";
import { SlateTestScoreOrderByInput } from "./SlateTestScoreOrderByInput";

export type SlateTestScoreFindManyArgs = {
  where?: SlateTestScoreWhereInput;
  orderBy?: Array<SlateTestScoreOrderByInput>;
  skip?: number;
  take?: number;
};
