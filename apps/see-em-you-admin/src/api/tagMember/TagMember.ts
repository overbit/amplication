import { Application } from "../application/Application";

export type TagMember = {
  application?: Application | null;
  id: number;
  tagInstanceId: number | null;
};
