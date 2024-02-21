import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";

export const LuApplicationProgramEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Choice" source="choice" />
        <TextInput label="Round2" source="round2" />
        <TextInput label="Decision" source="decision" />
        <TextInput label="Admission Status" source="admissionStatus" />
        <TextInput label="Admit" source="admit" />
        <TextInput label="Admit Comments" source="admitComments" />
        <TextInput label="Faccontact" source="faccontact" />
        <TextInput label="Stucontact" source="stucontact" />
        <NumberInput label="Scholarship Amt" source="scholarshipAmt" />
        <TextInput label="Scholarship Comments" source="scholarshipComments" />
        <TextInput label="Ltichoice" source="ltichoice" />
        <TextInput label="Msecertchoice" source="msecertchoice" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="programs.id"
          reference="ProgramModel"
          label="Programs"
        >
          <SelectInput optionText={ProgramModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
