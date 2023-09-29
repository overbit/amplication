export type MergeDatafile = {
  converted: boolean | null;
  convertError: number | null;
  convertMessage: string | null;
  datafileinfoId: number;
  id: string;
  merged: boolean | null;
  mergeError: number | null;
  mergeFilename: string | null;
  mergeId: number;
  mergeMessage: string | null;
};
