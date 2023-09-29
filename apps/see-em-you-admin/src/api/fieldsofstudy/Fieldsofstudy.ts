import { ProgramModel } from "../programModel/ProgramModel";

export type Fieldsofstudy = {
  id: number;
  name: string;
  programs?: Array<ProgramModel>;
};
