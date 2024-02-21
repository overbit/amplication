import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Iso Code" source="isoCode" />
      </SimpleForm>
    </Edit>
  );
};
