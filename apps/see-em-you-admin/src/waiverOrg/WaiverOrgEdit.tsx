import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const WaiverOrgEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Active" source="active" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
