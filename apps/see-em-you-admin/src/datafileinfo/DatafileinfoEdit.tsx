import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DatafileinfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Extension" source="extension" />
        <DateTimeInput label="Moddate" source="moddate" />
        <NumberInput step={1} label="Section" source="section" />
        <NumberInput step={1} label="Size" source="size" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Userdata" source="userdata" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
