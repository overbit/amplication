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
        <DateTimeInput label="Start" source="start" />
        <DateTimeInput label="End" source="end" />
      </SimpleForm>
    </Create>
  );
};
