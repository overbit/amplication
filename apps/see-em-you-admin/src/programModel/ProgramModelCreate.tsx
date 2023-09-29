import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DegreeTitle } from "../degree/DegreeTitle";
import { FieldsofstudyTitle } from "../fieldsofstudy/FieldsofstudyTitle";
import { LuApplicationProgramTitle } from "../luApplicationProgram/LuApplicationProgramTitle";
import { MlAreaTitle } from "../mlArea/MlAreaTitle";
import { PaymentItemTitle } from "../paymentItem/PaymentItemTitle";
import { ProgramsApplicationreqTitle } from "../programsApplicationreq/ProgramsApplicationreqTitle";

export const ProgramModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Baseprice" source="baseprice" />
        <NumberInput label="Baseprice Late" source="basepriceLate" />
        <ReferenceInput source="degree.id" reference="Degree" label="Degree">
          <SelectInput optionText={DegreeTitle} />
        </ReferenceInput>
        <TextInput label="Description" source="description" />
        <TextInput label="Enabled" source="enabled" />
        <ReferenceInput
          source="fieldsofstudy.id"
          reference="Fieldsofstudy"
          label="Fieldsofstudy"
        >
          <SelectInput optionText={FieldsofstudyTitle} />
        </ReferenceInput>
        <TextInput label="Linkword" source="linkword" />
        <ReferenceArrayInput
          source="luApplicationPrograms"
          reference="LuApplicationProgram"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuApplicationProgramTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mlArea"
          reference="MlArea"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MlAreaTitle} />
        </ReferenceArrayInput>
        <TextInput label="Oraclestring" source="oraclestring" />
        <ReferenceArrayInput
          source="paymentItem"
          reference="PaymentItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentItemTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Prank" source="prank" />
        <NumberInput label="Programprice" source="programprice" />
        <NumberInput label="Programprice Late" source="programpriceLate" />
        <ReferenceArrayInput
          source="programsApplicationreqs"
          reference="ProgramsApplicationreq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProgramsApplicationreqTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
