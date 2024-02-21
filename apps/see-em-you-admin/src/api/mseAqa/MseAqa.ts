import { Application } from "../application/Application";

export type MseAqa = {
  reviewerId: number;
  englishComments: string | null;
  programmingComments: string | null;
  foundationalComments: string | null;
  maturityComments: string | null;
  understandingComments: string | null;
  experienceComments: string | null;
  englishRating: number | null;
  programmingRating: number | null;
  foundationalRating: number | null;
  maturityRating: number | null;
  understandingRating: number | null;
  experienceRating: number | null;
  application?: Application;
  id: number;
};
