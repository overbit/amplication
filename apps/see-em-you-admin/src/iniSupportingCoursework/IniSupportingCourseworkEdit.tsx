import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const IniSupportingCourseworkEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput
          label="Data Structures Number"
          source="dataStructuresNumber"
        />
        <TextInput label="Data Structures Title" source="dataStructuresTitle" />
        <TextInput label="Msit Experience" source="msitExperience" />
        <TextInput label="Probability Number" source="probabilityNumber" />
        <TextInput label="Probability Title" source="probabilityTitle" />
        <TextInput
          label="Programming Description"
          source="programmingDescription"
        />
        <TextInput
          label="Programming Description2"
          source="programmingDescription2"
        />
        <TextInput label="Statistics Number" source="statisticsNumber" />
        <TextInput label="Statistics Title" source="statisticsTitle" />
      </SimpleForm>
    </Edit>
  );
};
