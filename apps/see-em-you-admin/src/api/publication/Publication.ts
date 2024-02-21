import { Application } from "../application/Application";

export type Publication = {
  title: string | null;
  author: string | null;
  forum: string | null;
  citation: string | null;
  url: string | null;
  status: string | null;
  typeField: string | null;
  typeOther: string | null;
  datafileId: number | null;
  application?: Application;
  id: number;
};
