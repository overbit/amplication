import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const StudentDecisionUniversityShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Accepted" source="accepted" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Program Id" source="programId" />
      </SimpleShowLayout>
    </Show>
  );
};
