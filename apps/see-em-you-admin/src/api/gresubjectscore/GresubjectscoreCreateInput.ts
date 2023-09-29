import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type GresubjectscoreCreateInput = {
  application: ApplicationWhereUniqueInput;
  datafileId?: number | null;
  greSubEmail?: string | null;
  name?: string | null;
  percentile?: string | null;
  score?: string | null;
  scorereceived: boolean;
  testdate?: Date | null;
};
