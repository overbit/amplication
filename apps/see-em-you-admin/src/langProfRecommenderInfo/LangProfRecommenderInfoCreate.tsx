import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LangProfRecommenderInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Affiliation" source="affiliation" />
        <TextInput
          label="Language Specialization"
          source="languageSpecialization"
        />
        <TextInput label="Phone" source="phone" />
        <NumberInput step={1} label="Rec User Id" source="recUserId" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
