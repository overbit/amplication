import { MhciPrereqsCourse } from "../mhciPrereqsCourse/MhciPrereqsCourse";

export type MhciPrereqsCourseDatafile = {
  datafileinfoId: number | null;
  note: string | null;
  submittedToReviewer: boolean;
  newFileUploaded: boolean;
  mhciPrereqsCourses?: MhciPrereqsCourse;
  id: number;
};
