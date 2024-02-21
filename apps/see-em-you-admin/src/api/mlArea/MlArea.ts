import { Application } from "../application/Application";
import { ProgramModel } from "../programModel/ProgramModel";

export type MlArea = {
  area: string;
  application?: Application;
  programs?: ProgramModel;
  id: number;
};
