import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const ApplicationContentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Section Identifier" source="sectionIdentifier" />
        <TextField label="Program Id" source="programId" />
        <BooleanField label="Desired" source="desired" />
        <BooleanField label="Required" source="required" />
      </SimpleShowLayout>
    </Show>
  );
};
