import { MhciPrereqsCourseWhereUniqueInput } from "../mhciPrereqsCourse/MhciPrereqsCourseWhereUniqueInput";

export type MhciPrereqsCourseDatafileUpdateInput = {
  datafileinfoId?: number | null;
  note?: string | null;
  submittedToReviewer?: boolean;
  newFileUploaded?: boolean;
  mhciPrereqsCourses?: MhciPrereqsCourseWhereUniqueInput;
};
