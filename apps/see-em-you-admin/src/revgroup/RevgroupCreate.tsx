import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RevgroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Group Type" source="groupType" />
      </SimpleForm>
    </Create>
  );
};
