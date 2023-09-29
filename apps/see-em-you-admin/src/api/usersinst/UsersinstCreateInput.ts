export type UsersinstCreateInput = {
  applicationId?: number | null;
  classRank?: string | null;
  collegeName?: string | null;
  convertedGpa?: string | null;
  datafileId?: number | null;
  dateEntered?: Date | null;
  dateGrad?: Date | null;
  dateLeft?: Date | null;
  degree?: string | null;
  degreeLevel?: number | null;
  degreeLevelOther?: string | null;
  educationtype: number;
  gpa?: string | null;
  gpaMajor?: string | null;
  gpaScale?: number | null;
  instituteId?: number | null;
  joint?: number | null;
  jointInstituteId?: number | null;
  major1?: string | null;
  major2?: string | null;
  major3?: string | null;
  minor1?: string | null;
  minor2?: string | null;
  transscriptreceived?: boolean | null;
  userId: number;
};
