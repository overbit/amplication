import { ProgramModel } from "../programModel/ProgramModel";

export type Degree = {
  id: number;
  name: string;
  programs?: Array<ProgramModel>;
  short: string;
};
