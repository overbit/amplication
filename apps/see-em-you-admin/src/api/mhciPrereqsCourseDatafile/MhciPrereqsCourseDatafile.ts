import { MhciPrereqsCourse } from "../mhciPrereqsCourse/MhciPrereqsCourse";

export type MhciPrereqsCourseDatafile = {
  datafileinfoId: number | null;
  id: number;
  mhciPrereqsCourses?: MhciPrereqsCourse;
  newFileUploaded: boolean;
  note: string | null;
  submittedToReviewer: boolean;
};
