import { SlateEmail2AwUser as TSlateEmail2AwUser } from "../api/slateEmail2AwUser/SlateEmail2AwUser";

export const SLATEEMAIL2AWUSER_TITLE_FIELD = "slateEmail";

export const SlateEmail2AwUserTitle = (record: TSlateEmail2AwUser): string => {
  return record.slateEmail?.toString() || String(record.id);
};
