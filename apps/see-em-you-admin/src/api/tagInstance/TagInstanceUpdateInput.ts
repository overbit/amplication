export type TagInstanceUpdateInput = {
  tagId?: number | null;
  owner?: number | null;
  department?: number | null;
  period?: number | null;
  status?: "open" | "closed" | null;
};
