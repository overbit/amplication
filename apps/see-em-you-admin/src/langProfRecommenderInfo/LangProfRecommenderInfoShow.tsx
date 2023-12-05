import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LangProfRecommenderInfoShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Affiliation" source="affiliation" />
        <TextField label="Id" source="id" />
        <TextField
          label="Language Specialization"
          source="languageSpecialization"
        />
        <TextField label="Phone" source="phone" />
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
