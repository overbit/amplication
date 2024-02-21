import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const ApplicationDecisionSchoolShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Name" source="name" />
        <BooleanField label="Accepted" source="accepted" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
