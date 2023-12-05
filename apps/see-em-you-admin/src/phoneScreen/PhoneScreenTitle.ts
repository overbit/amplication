import { PhoneScreen as TPhoneScreen } from "../api/phoneScreen/PhoneScreen";

export const PHONESCREEN_TITLE_FIELD = "id";

export const PhoneScreenTitle = (record: TPhoneScreen): string => {
  return record.id?.toString() || String(record.id);
};
