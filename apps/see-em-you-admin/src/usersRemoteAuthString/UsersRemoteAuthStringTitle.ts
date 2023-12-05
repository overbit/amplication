import { UsersRemoteAuthString as TUsersRemoteAuthString } from "../api/usersRemoteAuthString/UsersRemoteAuthString";

export const USERSREMOTEAUTHSTRING_TITLE_FIELD = "remoteAuthString";

export const UsersRemoteAuthStringTitle = (
  record: TUsersRemoteAuthString
): string => {
  return record.remoteAuthString?.toString() || String(record.id);
};
