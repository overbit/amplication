export type ContentCreateInput = {
  name: string;
  content: string;
  contenttypeId: number;
  domainId?: number | null;
  modifieddate: Date;
  modifiedby: number;
  departmentId: number;
};
