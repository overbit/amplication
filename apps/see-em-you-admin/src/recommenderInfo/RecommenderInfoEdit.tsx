import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RecommenderInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Rec User Id" source="recUserId" />
        <TextInput label="Title" source="title" />
        <TextInput label="Affiliation" source="affiliation" />
        <TextInput label="Phone" source="phone" />
        <TextInput
          label="Relationship To Applicant"
          source="relationshipToApplicant"
        />
      </SimpleForm>
    </Edit>
  );
};
