import { MhciPrereqsCourseWhereUniqueInput } from "../mhciPrereqsCourse/MhciPrereqsCourseWhereUniqueInput";

export type MhciPrereqsCourseDatafileCreateInput = {
  datafileinfoId?: number | null;
  mhciPrereqsCourses: MhciPrereqsCourseWhereUniqueInput;
  newFileUploaded: boolean;
  note?: string | null;
  submittedToReviewer: boolean;
};
