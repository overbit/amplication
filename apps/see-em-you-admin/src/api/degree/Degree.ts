import { ProgramModel } from "../programModel/ProgramModel";

export type Degree = {
  name: string;
  short: string;
  programs?: Array<ProgramModel>;
  id: number;
};
