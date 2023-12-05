import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const Em2SopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Additional Info" source="additionalInfo" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Background" source="background" />
        <TextInput label="Objective" source="objective" />
        <TextInput label="Research Experience" source="researchExperience" />
        <TextInput label="Ta Interest" source="taInterest" />
      </SimpleForm>
    </Create>
  );
};
