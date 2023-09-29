export type TagUpdateInput = {
  category?: string | null;
  name?: string | null;
  parent?: string | null;
  sticky?: "static" | "dynamic" | null;
  typeField?: string | null;
};
