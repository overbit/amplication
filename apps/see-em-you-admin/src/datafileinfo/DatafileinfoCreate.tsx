import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DatafileinfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Extension" source="extension" />
        <NumberInput step={1} label="Size" source="size" />
        <NumberInput step={1} label="User Id" source="userId" />
        <NumberInput step={1} label="Section" source="section" />
        <DateTimeInput label="Moddate" source="moddate" />
        <TextInput label="Userdata" source="userdata" />
      </SimpleForm>
    </Create>
  );
};
