import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const MergeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="mergeDate" label="Merge Date" />
        <TextField label="Application Id" source="applicationId" />
        <BooleanField label="Merged" source="merged" />
        <TextField label="Error Field" source="errorField" />
        <TextField label="Message" source="message" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
