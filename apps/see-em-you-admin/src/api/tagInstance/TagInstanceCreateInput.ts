export type TagInstanceCreateInput = {
  department?: number | null;
  owner?: number | null;
  period?: number | null;
  status?: "open" | "closed" | null;
  tagId?: number | null;
};
