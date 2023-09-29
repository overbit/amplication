import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type MseAqaUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  englishComments?: string | null;
  englishRating?: number | null;
  experienceComments?: string | null;
  experienceRating?: number | null;
  foundationalComments?: string | null;
  foundationalRating?: number | null;
  maturityComments?: string | null;
  maturityRating?: number | null;
  programmingComments?: string | null;
  programmingRating?: number | null;
  reviewerId?: number;
  understandingComments?: string | null;
  understandingRating?: number | null;
};
