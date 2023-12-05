import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LangProfRecommenderInfoEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
