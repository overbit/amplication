export type ContentCreateInput = {
  content: string;
  contenttypeId: number;
  departmentId: number;
  domainId?: number | null;
  modifiedby: number;
  modifieddate: Date;
  name: string;
};
