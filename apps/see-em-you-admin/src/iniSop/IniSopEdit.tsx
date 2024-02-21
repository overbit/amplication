import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const IniSopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Objective" source="objective" />
        <TextInput label="Background" source="background" />
        <TextInput label="Research Experience" source="researchExperience" />
        <TextInput
          label="Leadership Experience"
          source="leadershipExperience"
        />
        <TextInput label="Sfs Interest" source="sfsInterest" />
        <TextInput label="Additional Info" source="additionalInfo" />
      </SimpleForm>
    </Edit>
  );
};
