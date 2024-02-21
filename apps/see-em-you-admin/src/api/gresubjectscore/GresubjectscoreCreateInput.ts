import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type GresubjectscoreCreateInput = {
  testdate?: Date | null;
  name?: string | null;
  score?: string | null;
  percentile?: string | null;
  datafileId?: number | null;
  greSubEmail?: string | null;
  scorereceived: boolean;
  application: ApplicationWhereUniqueInput;
};
