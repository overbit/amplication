import { Application } from "../application/Application";

export type Publication = {
  application?: Application;
  author: string | null;
  citation: string | null;
  datafileId: number | null;
  forum: string | null;
  id: number;
  status: string | null;
  title: string | null;
  typeField: string | null;
  typeOther: string | null;
  url: string | null;
};
