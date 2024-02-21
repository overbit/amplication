import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RecommenderInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
