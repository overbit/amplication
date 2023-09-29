import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const Em2SopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Additional Info" source="additionalInfo" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Background" source="background" />
        <TextInput label="Objective" source="objective" />
        <TextInput label="Research Experience" source="researchExperience" />
        <TextInput label="Ta Interest" source="taInterest" />
      </SimpleForm>
    </Edit>
  );
};
