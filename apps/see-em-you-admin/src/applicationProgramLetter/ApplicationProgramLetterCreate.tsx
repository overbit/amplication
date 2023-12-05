import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const ApplicationProgramLetterCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Admit Sent" source="admitSent" />
        <DateTimeInput label="Admit Sent Date" source="admitSentDate" />
        <BooleanInput label="Rejection Sent" source="rejectionSent" />
        <DateTimeInput label="Rejection Sent Date" source="rejectionSentDate" />
        <BooleanInput label="Waitlist Sent" source="waitlistSent" />
        <DateTimeInput label="Waitlist Sent Date" source="waitlistSentDate" />
      </SimpleForm>
    </Create>
  );
};
