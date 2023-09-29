import { Application } from "../application/Application";

export type MseAqa = {
  application?: Application;
  englishComments: string | null;
  englishRating: number | null;
  experienceComments: string | null;
  experienceRating: number | null;
  foundationalComments: string | null;
  foundationalRating: number | null;
  id: number;
  maturityComments: string | null;
  maturityRating: number | null;
  programmingComments: string | null;
  programmingRating: number | null;
  reviewerId: number;
  understandingComments: string | null;
  understandingRating: number | null;
};
