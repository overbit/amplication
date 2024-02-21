import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DepartmentReplyperiodEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Dept Id" source="deptId" />
        <DateTimeInput label="Start" source="start" />
        <DateTimeInput label="End" source="end" />
      </SimpleForm>
    </Edit>
  );
};
