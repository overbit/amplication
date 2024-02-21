export type GroupRankCommentCreateInput = {
  groupId: number;
  round: number;
  periodId: number;
  luUsersUsertypesId: number;
  comment?: string | null;
};
