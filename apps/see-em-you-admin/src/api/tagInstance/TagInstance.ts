export type TagInstance = {
  department: number | null;
  id: number;
  owner: number | null;
  period: number | null;
  status?: "open" | "closed" | null;
  tagId: number | null;
};
