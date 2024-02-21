export type RecommenderInfoCreateInput = {
  recUserId: number;
  title: string;
  affiliation: string;
  phone: string;
  relationshipToApplicant?: string | null;
};
