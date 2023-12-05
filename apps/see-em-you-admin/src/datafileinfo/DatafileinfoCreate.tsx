import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DatafileinfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Extension" source="extension" />
        <DateTimeInput label="Moddate" source="moddate" />
        <NumberInput step={1} label="Section" source="section" />
        <NumberInput step={1} label="Size" source="size" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Userdata" source="userdata" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
