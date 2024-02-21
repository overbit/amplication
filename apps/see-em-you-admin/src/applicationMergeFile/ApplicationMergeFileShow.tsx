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
        <TextField label="Id" source="id" />
        <TextField label="Guid" source="guid" />
        <TextField label="Merge File" source="mergeFile" />
        <DateField source="mergeDate" label="Merge Date" />
      </SimpleShowLayout>
    </Show>
  );
};
