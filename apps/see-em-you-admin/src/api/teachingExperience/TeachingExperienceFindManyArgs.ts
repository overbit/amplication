import { TeachingExperienceWhereInput } from "./TeachingExperienceWhereInput";
import { TeachingExperienceOrderByInput } from "./TeachingExperienceOrderByInput";

export type TeachingExperienceFindManyArgs = {
  where?: TeachingExperienceWhereInput;
  orderBy?: Array<TeachingExperienceOrderByInput>;
  skip?: number;
  take?: number;
};
