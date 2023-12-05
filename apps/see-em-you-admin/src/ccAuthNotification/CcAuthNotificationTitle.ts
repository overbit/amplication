import { CcAuthNotification as TCcAuthNotification } from "../api/ccAuthNotification/CcAuthNotification";

export const CCAUTHNOTIFICATION_TITLE_FIELD = "id";

export const CcAuthNotificationTitle = (
  record: TCcAuthNotification
): string => {
  return record.id?.toString() || String(record.id);
};
