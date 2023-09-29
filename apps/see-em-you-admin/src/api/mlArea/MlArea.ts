import { Application } from "../application/Application";
import { ProgramModel } from "../programModel/ProgramModel";

export type MlArea = {
  application?: Application;
  area: string;
  id: number;
  programs?: ProgramModel;
};
