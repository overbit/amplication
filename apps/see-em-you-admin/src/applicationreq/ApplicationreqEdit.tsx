import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProgramsApplicationreqTitle } from "../programsApplicationreq/ProgramsApplicationreqTitle";

export const ApplicationreqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Short" source="short" />
        <TextInput label="Linkname" source="linkname" />
        <NumberInput step={1} label="Sortorder" source="sortorder" />
        <ReferenceArrayInput
          source="programsApplicationreqs"
          reference="ProgramsApplicationreq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProgramsApplicationreqTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
