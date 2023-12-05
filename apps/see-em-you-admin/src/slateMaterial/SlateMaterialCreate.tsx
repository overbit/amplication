import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SlateMaterialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="Application Slate Guid"
          source="applicationSlateGuid"
        />
        <TextInput label="Email" source="email" />
        <TextInput label="File Name" source="fileName" />
        <TextInput label="Material Export1" source="materialExport1" />
        <TextInput label="Material Name" source="materialName" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
