import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const ApplicationProgramLetterEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Admit Sent" source="admitSent" />
        <DateTimeInput label="Admit Sent Date" source="admitSentDate" />
        <BooleanInput label="Rejection Sent" source="rejectionSent" />
        <DateTimeInput label="Rejection Sent Date" source="rejectionSentDate" />
        <BooleanInput label="Waitlist Sent" source="waitlistSent" />
        <DateTimeInput label="Waitlist Sent Date" source="waitlistSentDate" />
      </SimpleForm>
    </Edit>
  );
};
