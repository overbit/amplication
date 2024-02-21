export type DatafileinfoCreateInput = {
  typeField: string;
  extension?: string | null;
  size: number;
  userId: number;
  section: number;
  moddate: Date;
  userdata?: string | null;
};
