export type MergeDatafileCreateInput = {
  mergeId: number;
  datafileinfoId: number;
  converted?: boolean | null;
  convertError?: number | null;
  convertMessage?: string | null;
  mergeFilename?: string | null;
  merged?: boolean | null;
  mergeError?: number | null;
  mergeMessage?: string | null;
};
