import { MhciPrereqsCourseWhereUniqueInput } from "../mhciPrereqsCourse/MhciPrereqsCourseWhereUniqueInput";

export type MhciPrereqsCourseDatafileCreateInput = {
  datafileinfoId?: number | null;
  note?: string | null;
  submittedToReviewer: boolean;
  newFileUploaded: boolean;
  mhciPrereqsCourses: MhciPrereqsCourseWhereUniqueInput;
};
