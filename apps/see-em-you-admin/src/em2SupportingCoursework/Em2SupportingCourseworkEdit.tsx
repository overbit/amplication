import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const Em2SupportingCourseworkEdit = (
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
        <TextInput
          label="Makerkits Description"
          source="makerkitsDescription"
        />
        <TextInput
          label="Makerkits Description2"
          source="makerkitsDescription2"
        />
        <TextInput label="Msit Experience" source="msitExperience" />
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
