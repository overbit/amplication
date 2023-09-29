import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AaDepartmentTitle } from "../aaDepartment/AaDepartmentTitle";

export const DepartmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="aaDepartment"
          reference="AaDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AaDepartmentTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Allow Request Advisors"
          source="allowRequestAdvisors"
        />
        <TextInput label="Cc Email" source="ccEmail" />
        <NumberInput step={1} label="Drank" source="drank" />
        <TextInput label="Enable Final" source="enableFinal" />
        <TextInput label="Enable Round1" source="enableRound1" />
        <TextInput label="Enable Round2" source="enableRound2" />
        <TextInput label="Enable Round3" source="enableRound3" />
        <TextInput label="Enable Round4" source="enableRound4" />
        <TextInput label="Name" source="name" />
        <TextInput label="Oraclestring" source="oraclestring" />
        <NumberInput
          step={1}
          label="Parent School Id"
          source="parentSchoolId"
        />
        <TextInput
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextInput label="Semiblind Review" source="semiblindReview" />
      </SimpleForm>
    </Edit>
  );
};
