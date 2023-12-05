import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const ApplicationProgramLetterShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Admit Sent" source="admitSent" />
        <TextField label="Admit Sent Date" source="admitSentDate" />
        <TextField label="Id" source="id" />
        <BooleanField label="Rejection Sent" source="rejectionSent" />
        <TextField label="Rejection Sent Date" source="rejectionSentDate" />
        <BooleanField label="Waitlist Sent" source="waitlistSent" />
        <TextField label="Waitlist Sent Date" source="waitlistSentDate" />
      </SimpleShowLayout>
    </Show>
  );
};
