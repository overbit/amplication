import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ApplicationMergeFileCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Guid" source="guid" />
        <TextInput label="Merge File" source="mergeFile" />
      </SimpleForm>
    </Create>
  );
};
