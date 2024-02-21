export type RecommendformCreateInput = {
  recommendId: number;
  formId: number;
  questionId: number;
  questionKey?: number | null;
  response?: string | null;
};
