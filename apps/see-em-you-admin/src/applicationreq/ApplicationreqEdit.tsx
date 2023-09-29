import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ProgramsApplicationreqTitle } from "../programsApplicationreq/ProgramsApplicationreqTitle";

export const ApplicationreqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Linkname" source="linkname" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="programsApplicationreqs"
          reference="ProgramsApplicationreq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProgramsApplicationreqTitle} />
        </ReferenceArrayInput>
        <TextInput label="Short" source="short" />
        <NumberInput step={1} label="Sortorder" source="sortorder" />
      </SimpleForm>
    </Edit>
  );
};
