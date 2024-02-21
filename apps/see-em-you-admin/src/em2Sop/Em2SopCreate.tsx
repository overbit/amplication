import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const Em2SopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Objective" source="objective" />
        <TextInput label="Background" source="background" />
        <TextInput label="Research Experience" source="researchExperience" />
        <TextInput label="Ta Interest" source="taInterest" />
        <TextInput label="Additional Info" source="additionalInfo" />
      </SimpleForm>
    </Create>
  );
};
