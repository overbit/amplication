export type TagCreateInput = {
  name?: string | null;
  sticky?: "static" | "dynamic" | null;
  typeField?: string | null;
  category?: string | null;
  parent?: string | null;
};
