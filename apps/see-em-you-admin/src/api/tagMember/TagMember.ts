import { Application } from "../application/Application";

export type TagMember = {
  tagInstanceId: number | null;
  application?: Application | null;
  id: number;
};
