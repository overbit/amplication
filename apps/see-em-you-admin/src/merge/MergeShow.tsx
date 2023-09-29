import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const MergeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Error Field" source="errorField" />
        <TextField label="Id" source="id" />
        <BooleanField label="Merged" source="merged" />
        <DateField source="mergeDate" label="Merge Date" />
        <TextField label="Message" source="message" />
      </SimpleShowLayout>
    </Show>
  );
};
