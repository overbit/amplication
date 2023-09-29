import { RegistrationFeeStatus as TRegistrationFeeStatus } from "../api/registrationFeeStatus/RegistrationFeeStatus";

export const REGISTRATIONFEESTATUS_TITLE_FIELD = "id";

export const RegistrationFeeStatusTitle = (
  record: TRegistrationFeeStatus
): string => {
  return record.id?.toString() || String(record.id);
};
