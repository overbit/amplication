import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RevgroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Group Type" source="groupType" />
      </SimpleForm>
    </Edit>
  );
};
