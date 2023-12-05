import { ReviewerPreferenceWhereInput } from "./ReviewerPreferenceWhereInput";
import { ReviewerPreferenceOrderByInput } from "./ReviewerPreferenceOrderByInput";

export type ReviewerPreferenceFindManyArgs = {
  where?: ReviewerPreferenceWhereInput;
  orderBy?: Array<ReviewerPreferenceOrderByInput>;
  skip?: number;
  take?: number;
};
