import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const ApplicationContentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Desired" source="desired" />
        <TextField label="Id" source="id" />
        <TextField label="Program Id" source="programId" />
        <BooleanField label="Required" source="required" />
        <TextField label="Section Identifier" source="sectionIdentifier" />
      </SimpleShowLayout>
    </Show>
  );
};
