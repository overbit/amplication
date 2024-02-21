import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DatafileinfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Extension" source="extension" />
        <NumberInput step={1} label="Size" source="size" />
        <NumberInput step={1} label="User Id" source="userId" />
        <NumberInput step={1} label="Section" source="section" />
        <DateTimeInput label="Moddate" source="moddate" />
        <TextInput label="Userdata" source="userdata" />
      </SimpleForm>
    </Edit>
  );
};
