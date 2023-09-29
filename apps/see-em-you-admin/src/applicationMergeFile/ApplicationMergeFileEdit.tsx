import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ApplicationMergeFileEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Guid" source="guid" />
        <TextInput label="Merge File" source="mergeFile" />
      </SimpleForm>
    </Edit>
  );
};
