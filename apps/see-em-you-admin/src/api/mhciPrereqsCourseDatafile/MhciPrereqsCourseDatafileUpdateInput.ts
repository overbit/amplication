import { MhciPrereqsCourseWhereUniqueInput } from "../mhciPrereqsCourse/MhciPrereqsCourseWhereUniqueInput";

export type MhciPrereqsCourseDatafileUpdateInput = {
  datafileinfoId?: number | null;
  mhciPrereqsCourses?: MhciPrereqsCourseWhereUniqueInput;
  newFileUploaded?: boolean;
  note?: string | null;
  submittedToReviewer?: boolean;
};
