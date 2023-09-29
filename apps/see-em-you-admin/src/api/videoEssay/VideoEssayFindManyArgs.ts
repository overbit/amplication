import { VideoEssayWhereInput } from "./VideoEssayWhereInput";
import { VideoEssayOrderByInput } from "./VideoEssayOrderByInput";

export type VideoEssayFindManyArgs = {
  where?: VideoEssayWhereInput;
  orderBy?: Array<VideoEssayOrderByInput>;
  skip?: number;
  take?: number;
};
