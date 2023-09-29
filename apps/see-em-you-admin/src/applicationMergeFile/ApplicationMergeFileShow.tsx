import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ApplicationMergeFileShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
        <DateField source="mergeDate" label="Merge Date" />
        <TextField label="Merge File" source="mergeFile" />
      </SimpleShowLayout>
    </Show>
  );
};
