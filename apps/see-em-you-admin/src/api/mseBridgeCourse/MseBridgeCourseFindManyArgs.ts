import { MseBridgeCourseWhereInput } from "./MseBridgeCourseWhereInput";
import { MseBridgeCourseOrderByInput } from "./MseBridgeCourseOrderByInput";

export type MseBridgeCourseFindManyArgs = {
  where?: MseBridgeCourseWhereInput;
  orderBy?: Array<MseBridgeCourseOrderByInput>;
  skip?: number;
  take?: number;
};
