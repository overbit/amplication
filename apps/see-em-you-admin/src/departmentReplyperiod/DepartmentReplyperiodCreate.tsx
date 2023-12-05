import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DepartmentReplyperiodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Dept Id" source="deptId" />
        <DateTimeInput label="End" source="end" />
        <DateTimeInput label="Start" source="start" />
      </SimpleForm>
    </Create>
  );
};
