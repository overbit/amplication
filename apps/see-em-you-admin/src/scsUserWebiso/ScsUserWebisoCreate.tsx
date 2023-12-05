import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ScsUserWebisoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Scs User Id" source="scsUserId" />
        <TextInput label="Webiso" source="webiso" />
      </SimpleForm>
    </Create>
  );
};
