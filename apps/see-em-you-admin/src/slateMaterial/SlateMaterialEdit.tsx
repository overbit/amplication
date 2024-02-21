import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SlateMaterialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Application Slate Guid"
          source="applicationSlateGuid"
        />
        <TextInput label="Material Export1" source="materialExport1" />
        <TextInput label="File Name" source="fileName" />
        <TextInput label="Material Name" source="materialName" />
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" />
      </SimpleForm>
    </Edit>
  );
};
