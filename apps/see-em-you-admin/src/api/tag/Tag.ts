export type Tag = {
  category: string | null;
  id: number;
  name: string | null;
  parent: string | null;
  sticky?: "static" | "dynamic" | null;
  typeField: string | null;
};
