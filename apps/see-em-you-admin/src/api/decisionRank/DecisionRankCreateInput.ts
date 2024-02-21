export type DecisionRankCreateInput = {
  departmentId: number;
  periodId: number;
  decision: string;
  luUsersUsertypesId: number;
  ranking?: string | null;
};
