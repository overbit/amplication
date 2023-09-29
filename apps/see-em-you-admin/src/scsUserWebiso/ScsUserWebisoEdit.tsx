import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ScsUserWebisoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Scs User Id" source="scsUserId" />
        <TextInput label="Webiso" source="webiso" />
      </SimpleForm>
    </Edit>
  );
};
