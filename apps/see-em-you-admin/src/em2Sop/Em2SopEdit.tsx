import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const Em2SopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Objective" source="objective" />
        <TextInput label="Background" source="background" />
        <TextInput label="Research Experience" source="researchExperience" />
        <TextInput label="Ta Interest" source="taInterest" />
        <TextInput label="Additional Info" source="additionalInfo" />
      </SimpleForm>
    </Edit>
  );
};
