import { ProgramModel } from "../programModel/ProgramModel";

export type Fieldsofstudy = {
  name: string;
  programs?: Array<ProgramModel>;
  id: number;
};
