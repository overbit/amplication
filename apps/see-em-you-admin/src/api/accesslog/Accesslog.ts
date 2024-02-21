export type Accesslog = {
  id: number;
  usersId: number | null;
  luUsersUsertypesId: number | null;
  usertypeId: number | null;
  applicationId: number | null;
  client: string | null;
  eventtime: Date;
  activity: string | null;
  domain: number | null;
  referer: string | null;
  xforward: string | null;
  sa: string | null;
  ra: string | null;
  lastsrv: string | null;
};
