import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VoucherTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Prefix" source="prefix" />
      </SimpleForm>
    </Edit>
  );
};
